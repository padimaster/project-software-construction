import express from 'express'
import accionesRoutes from './routes/acciones-routers.js'
import indexRoutes from './routes/index.routes.js'
const app = express()
app.use(express.json())
app.use(indexRoutes)
app.use(accionesRoutes)
app.listen(4000)
