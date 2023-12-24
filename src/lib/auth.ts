import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserByEmail } from '@/services/getUsers';
import CredentialTypes from '@/types/api/credentials.types';

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
          return null;
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/'
  }
};

export default authOptions;
