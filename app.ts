import dotenv from 'dotenv'
dotenv.config()
import bodyParser from 'body-parser'
import express from 'express'

import Routers from '@src/routes'
const app = express()

const PORT: number = 3000

// Allow maximum data upload up to 50 MBytes
app.use(bodyParser.json({ limit: '50mb' }))
// Allow maximum data upload up to 50 MBytes
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.listen(PORT, () => {
  console.log('Application started on port 3000!')
})
