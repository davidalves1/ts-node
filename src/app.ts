import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './routes'

mongoose.Promise = global.Promise

class App {
    public server: express.Application
    private readonly mongoUrl = 'mongodb://mongo:27017/tripyou'

    public constructor () {
      this.server = express()
      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares (): void {
      this.server.use(express.json())
      this.server.use(bodyParser.urlencoded({ extended: false }))
      this.server.use(cors())
    }

    private database (): void {
      mongoose.connect(this.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err) => console.log('error :', err))
    }

    private routes (): void {
      this.server.use(routes)
    }
}

export default new App().server
