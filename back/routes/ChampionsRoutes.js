import express from 'express'
import { getChampions, getAllChampions, createChampions, updateChampions, deleteChampions } from '../controllers/ChampionsController.js'

const router = express.Router()

router.get('/', getAllChampions)
router.get('/:id', getChampions)
router.post('/', createChampions)
router.put('/:id', updateChampions)
router.delete('/:id', deleteChampions)

export default router