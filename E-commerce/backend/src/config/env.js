import dotenv from 'dotenv';
dotenv.config();
import z from 'zod'


const envSchema = z.object({
    PORT: z.coerce.number(),
});

const env = envSchema.safeParse(process.env)

if (!env.success) {
    console.log('check env')
};

export default env.data