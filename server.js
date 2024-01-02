const express = require('express');
const app = express();
const PORT = 3030;
// const cors = require('cors');

const bookRouter = require('./book') // assuming the file is named book.js

// middleware to parse JSON
app.use(express.json());

// mount the router at the specific endpoint
app.use('/books', bookRouter);

// start the server
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
