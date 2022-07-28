const express = require('express');
const cors = require('cors');

require('dotenv').config();

//creando servidor express
const app = express();

// CORS
app.use(cors())

//Rutas
app.use('/api/items', require('./routes/products'));


//escuha las peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

module.exports = app;