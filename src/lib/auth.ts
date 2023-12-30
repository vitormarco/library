import { NextAuthOptions, DefaultSession, DefaultUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserByEmail } from '@/services/getUsers';
import CredentialTypes from '@/types/api/credentials.types';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: DefaultSession['user'] & {
      id: string;
      role: Array<string>;
    };
  }
  interface User extends DefaultUser {
    role: Array<string>;
  }
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as CredentialTypes;
        const users = await getUserByEmail(email);
        const user = users.find((user: { email: string; password: string }) =>
          email.includes(user.email)
        );

        if (!user || user.password !== password) {
          throw new Error('User not found.');
        }

        return user;
      }
    })
  ],

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = token.role as Array<string>;

      return session;
    }
  },
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/'
  }
};

export default authOptions;
