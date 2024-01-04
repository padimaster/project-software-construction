import { pool } from '../db.js'

export const getAcciones = async (req, res) => {
    const [rows] = await pool.query("Select * from accion")
    res.json(rows)
}

export const createAcciones = async (req, res) => {
    const { nameStock, date, price, amount } = req.body 
    const [rows] =await pool.query('insert into accion (idcartera, nombreaccion,fechacompra,precioaccion,cantidad,costototal) ' +
        ' values (1,?,?,?,?,?)', [nameStock, date, price, amount, (price * amount)])


    res.send({
        id: rows.insertId,
        nameStock,
        date,
        price,
        amount
    })
}

export const updateAcciones = (req, res) => {
    res.send("actualizando")
}

export const deleteAcciones = (req, res) => {
    res.send("eliminando")
}