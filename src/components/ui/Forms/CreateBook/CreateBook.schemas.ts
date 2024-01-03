import { z } from 'zod';

const CreateBookFormSchema = z.object({
  title: z.string().trim().min(3, 'Minimo de 3 caracteres'),
  description: z.string().trim().min(300, 'Minimo de 300 caracteres')
});

export default CreateBookFormSchema;
