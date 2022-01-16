const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const { Server } = require('http')
const app = express()
const port = 3000

const route = require('./routes');


// su dung static file
app.use(express.static(path.join(__dirname, 'public')))


// dung middleware de xu li form va dung de in ra req.body
app.use(express.urlencoded())
app.use(express.json())

// theo doi duong dan 


app.use(morgan('combined'))

//template engine // extname set duoi cho file 

app.engine('hbs', exphbs.engine({ extname: '.hbs' }))

//set thu muc chua layout   

app.set('views', path.join(__dirname, 'resources/views'))


//set view engine 

app.set('view engine', 'hbs')


route(app);





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})