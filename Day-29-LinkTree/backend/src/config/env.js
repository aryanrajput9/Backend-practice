import dotenv from 'dotenv';
dotenv.config()
import z from 'zod';


const envSchema = z.object({
    PORT: z.coerce.number(),
    MONGOOSE_URL: z.string(),
    JWT_TOKEN: z.string()
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
    console.log('check your env')
}

export default env.data
