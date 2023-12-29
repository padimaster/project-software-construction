import { Router } from "express";
import { getAcciones, createAcciones, updateAcciones, deleteAcciones } from "../controllers/acciones.controller.js";
const router = Router()


router.get('/acciones', getAcciones)
router.post('/acciones', createAcciones)
router.put('/acciones', updateAcciones)
router.delete('/acciones', deleteAcciones)
export default router;