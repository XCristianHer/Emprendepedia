import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path'; // Para acceder al directorio actual 

const app = express();

// Conexión base de datos 
const mongoose = require('mongoose'); 
const uri = 'mongodb://localhost:27017/emprendimientodb'; 
const options = {useNewUrlParser: true, useUnifiedTopology: true}; 

mongoose.connect(uri, options).then( // Or using promises 
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
    () => { console.log('DB Conectada') }, 
    err => { console.log(err) }
);


//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));


// Rutas
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
app.use('/api', require('./routes/user'));

// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

// Puerto
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port'+ app.get('puerto'));
});