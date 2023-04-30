import express  from "express"
import { AppDataSource } from "./data-source"
import routes from "./routes"

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Credentials', 'true')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization')
        next();
    });

    app.use(routes)

    return app.listen(process.env.PORT)
})