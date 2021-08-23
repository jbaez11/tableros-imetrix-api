const express = require('express');
require('dotenv').config();
var compression = require('compression')
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./network/routes');
      
var app = express();

app.use(cors());

app.use('/:bd/:accion',(req, res, next) => {
   
  nameDB = req.params.bd;
  res.locals.path_data_link = nameDB;
    
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
  next();     
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
router(app);

app.use('/app', express.static('public'));
app.listen(port, ()=>{
    console.log(`escuchando por el puerto ${port}`);
})




