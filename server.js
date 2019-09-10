const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

app.set('views', './views');

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    const data = {
    person: {
        firstName: 'Tom',
        lastName: 'Scott',
    }
    }
    res.render('index', data);
});

app.get('/contact', (req, res) => {
    res.render('contact');
});
  
app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server is listening at http://localhost:${PORT}`));

//app.listen(8080, () => {
   // console.log("listening at port 8080")
//});