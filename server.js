require('dotenv').config()
const express = require('express');
const middleware = require('./middleware/middleware');
const router = require('./router/router')
const app = express();
/**
 * Middleware
 */

app.use(middleware)
const PORT = process.env.PORT || 5000;



app.listen(PORT, ()=> {
    console.log(`listening on http://localhost:${PORT}`);
});