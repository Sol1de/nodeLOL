import express from 'express'
import hello from './routes/HelloRoutes.js'
import champions from './routes/ChampionsRoutes.js'

const router = express.Router()

router.use('/', hello)
router.use('/champions', champions)

export default router