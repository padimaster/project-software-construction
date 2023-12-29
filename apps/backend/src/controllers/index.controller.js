import {pool} from '../db.js'
export const ping = async (req,res) =>{
    const [result] = await pool.query('Select "hola mundo" as result')
     res.json(result[0])
 }