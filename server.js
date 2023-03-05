const app = require('./app.js');
const dotenv = require('dotenv').config();
PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})