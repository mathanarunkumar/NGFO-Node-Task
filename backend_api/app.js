const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors =require('cors')
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });
 
// body parser
app.use(bodyParser.json());

// Import routes
const register = require("./routes/register-router")
const student = require("./routes/student-route")

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Use routes
app.use('/api/v1/', register);
app.use('/api/v1/', student);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

// Connect to MongoDB
const connectMongoDb = require('./config/connectDatabase');
connectMongoDb();
