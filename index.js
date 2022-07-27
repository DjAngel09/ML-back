const express = require('express');
require('dotenv').config();
const cors = require('cors');

//creando servidor express
const app = express();

// CORS
app.use(cors())

//Directorio publico
app.use( express.static('public'));

//Rutas
app.use('/api/items', require('./routes/products'));


//escuha las peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});