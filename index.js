import express from "express";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import cors from "cors";
import csvRouter from "./routes/csvRouter.js"


const app = express();


//middleware
app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to Certificate Api')
});

app.use('/api/csv', csvRouter);

const PORT = process.env.port || 3000

app.listen(PORT , ()=>{
    console.log(`connected to backend - ${PORT}`);
});