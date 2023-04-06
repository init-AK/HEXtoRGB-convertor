const path = require('path')
const express = require('express')
const hbs = require('hbs')

//INIT APP
const app = express()

//Getting the paths 
const viewsPathOklahoma = path.join(__dirname,'/views')
const publicPath = path.join(__dirname,'/public')

//Setting the view path and the ENGINE 
app.set('views', viewsPathOklahoma)
app.set('view engine', 'hbs')

//Setting the static PUBLIC DIR
app.use(express.static(publicPath))

//GETTING ALL THE ROUTES
app.get('/',(req,res) => {
    res.render('home', {
        title: 'Colour Format Changer',
    })
})

app.get('/rgbtohex', (req,res) => {
    res.render('index',  {
        title:'RGB <==> HEX',
        body:"Drop in an RGB and Get the HEX"
    })
})
app.get('/hextorgb', (req,res) => {
    res.render('index2', {
        title:'HEX <==> RGB',
        body:'Drop in a HEX and get The RGB'
    })
})

//RUNNING THE SERVER
const port = process.env.PORT || 8090
app.listen(port, () => {
    console.log(`Server running on port : ${port}`)
})