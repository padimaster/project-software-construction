import {createPool} from 'mysql2/promise'
export const pool = createPool({
    host:'localhost',
    user:'root',
    password:'passMysql23',
    port: 3306,
    database:'acciones'
})

