import { Pool } from 'pg'

export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'0781459239',
    database:'perntodo',
    port:5432
})
