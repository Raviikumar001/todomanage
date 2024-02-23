const express = require('express');
const cors = require('cors');
const {connectDB  }= require('./DB/connect');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use(cors({
    origin: "*",
    methods: "GET,POST,PATCH,DELETE",
  }));

app.use('/v1/api', taskRoutes);

app.get('/', (req,res)=> {
    res.send("Welcome to tasks Table");
})

const start = async ()=> {

    try {
        await connectDB();

        app.listen(port, ()=> {
            console.log(`server is listening on port ${port}` );
        })
    } catch (error) {
        console.log(error)
    }
}

start()