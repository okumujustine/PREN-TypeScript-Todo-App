import app from './app';
import { pool } from './config/database'


const port = process.env.port || 4000
app.listen(port, async () => {
    console.log(`app server running on port ${port}`)
})