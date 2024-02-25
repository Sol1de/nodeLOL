import express from 'express'
import { getRealChampions, createRealChampions, deleteRealChampions } from '../controllers/RealChampionsController.js'

const router = express.Router()

router.get('/', getRealChampions)
router.post('/', createRealChampions)
router.delete('/', deleteRealChampions)

export default router