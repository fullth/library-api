import  * as dotenv from 'dotenv';
dotenv.config();

export const development = {
    host: process.env.DATABASE_SPRINT_HOST,
    user: process.env.DATABASE_SPRINT_USER,
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: process.env.DATABASE_SPRINT_DB
}

console.dir(process.env)
