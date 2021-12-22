import 'reflect-metadata'
import './infrastructure/configs/module-alias'
import { app } from '@/infrastructure/configs/app'
import { config } from 'dotenv'
config()

const port = process.env.PORT
app.listen(port ?? 7000, () => console.log(`server listening on  http://localhost:${port ?? '7000'}`))
