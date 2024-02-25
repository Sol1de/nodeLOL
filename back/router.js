import express from 'express'
import hello from './routes/HelloRoutes.js'
import champions from './routes/ChampionsRoutes.js'
import realChampions from './routes/RealChampionsRoutes.js'

const router = express.Router()

router.use('/', hello)
router.use('/champions', champions)
router.use('/real', realChampions)

export default router