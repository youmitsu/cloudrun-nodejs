import express from 'express'
import { Router } from 'express'
import { hello } from './app'

// @ts-ignore
const port = parseInt(process.env.PORT) || 8080
const app = express()
const router = Router()

router.get('/', hello)
app.use(router)

app.listen(port, () => {
  console.log(`holly-sample: listening on port ${port}`)
})
