import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './router.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(3000, () => {
  console.log(`Le serveur est ouvert sur le port 3000`)
})