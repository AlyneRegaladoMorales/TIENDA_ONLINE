import {z} from 'zod';

export const validationLogin = z.object({
    username: z.string().min(1, 'El nombre de usuario es obligatorio'),
    password: z.string().min(6, 'La contraseña es obligatoria')
});