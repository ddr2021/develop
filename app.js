//EXPRESS
const express = require('express');
const app = express();

//SERVIDOR
const port = 3030;
app.listen(port, () => { console.log(`My server run in https://www.localhost${port}`) });

//RUTAS ESTATICAS PARA LINKEAR ARCHIVOS DEL PROYECTO
app.use(express.static('public'));
app.use(express.static('views'));

//PETICIONES Y RESPUESTAS AL SERVIDOR
const path = require('path');
app.get('/', (req, res) => { res.sendFile(path.resolve(__dirname, 'views', 'home.html')) });

