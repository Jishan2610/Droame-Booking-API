//importing express 
const express=require('express');
//instance of express 
const app=express();
//importing the environment variables
require('dotenv').config();
require('express-async-errors');
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(express.json());


app.use(cors())

//connecting function with mongoDB collection
const connectDB = require('./db/connect');
// routers
const userRouter = require('./routes/user');
const bookingRouter = require('./routes/booking');

//middleware
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

//router with base path
app.use('/api/v1/user',userRouter)
app.use('/api/v1/bookings',bookingRouter)

//attaching middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);





//connecting to port
const port = process.env.PORT || 5000;
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();