import express from 'express';
import logger from 'morgan';
import routes from "./routes/index";
import cors from 'cors'

const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//routes url
app.use("/api", routes)

export default app;