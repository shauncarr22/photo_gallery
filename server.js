const express = require('express')
const app = express()
const port = 3008
const db = require('./db')
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser());
app.use(express.static('dist'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/products', (req, res) => {
    db.getAllProducts((err,results) => {
        if (err){
            console.log(err)
        }else{
            res.send(results);
        }
    }, 2);//1 shoud be id for proxy
})

app.listen(port, () => console.log(`Listening on port ${port}!!!`))