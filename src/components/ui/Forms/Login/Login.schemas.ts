import { z } from 'zod';

const LoginFormSchema = z.object({
  email: z.string().trim().min(3, 'O campo é obrigatório').email('Formato de e-mail inválido'),
  password: z.string().trim().min(3, 'O campo é obrigatório')
});

export default LoginFormSchema;
