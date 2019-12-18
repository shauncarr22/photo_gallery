const express = require('express')
const app = express()
const path = require('path')
const port = 3008
const connection = require('../db/config')
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser());
app.use(express.static('dist'))

app.get('/getPhoto', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../dist/bundle.js`))
});

app.get('/products/:id', (req, res) => {
  connection.query(`SELECT * from products WHERE id = '${req.params.id}'`, (err,results) => {
      if(err){
          console.error(err)
      } else {
          res.send(results)
      }
  })
});

app.listen(port, () => console.log(`Listening on port ${port}!!!`))