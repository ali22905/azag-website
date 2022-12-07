require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
// to change the path of things
const path = require('path');
// to make a post request
app.use(express.urlencoded({ extended: true }));
// to change the defult path of the views directory
app.set('views', path.join(__dirname, './src/views'))
// to act like you are in the views directory
app.set('view engine','ejs');
// to act like we are in the dist folder from the pug file
app.use(express.static('dist'));
// browser only make post and get request so we installed library to help us
const method_override = require('method-override');



app.listen(process.env.PORT  ||  port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





// for auto refresh 
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'public'));
// const connectLivereload = require("connect-livereload");
// const { send, render } = require('express/lib/response');
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// }); 
// end auto refresh


app.use(method_override('_method'))
app.use(express.json())





app.get('/', (req, res) => {
  res.redirect('/home')
})


app.get('/home', (req, res) => {
  res.render('index', {title: 'AZ - home'})
})


app.get('/portfolio', (req, res) => {
  res.render('portfolio', {title: 'AZ - portfolio'})
})


app.get('/about', (req, res) => {
  res.render('about', {title: 'AZ - about'})
})


app.get('/prices', (req, res) => {
  res.render('prices', {title: 'AZ - prices'})
})


app.get('/landing-pages', (req, res) => {
  res.render('landing-pages', {title: 'AZ - landing pages'})
})


app.get('/contact', (req, res) => {
  res.render('contact', {title: 'AZ - contact'})
})


app.get('/e-commerces', (req, res) => {
  res.render('e-commerces', {title: 'AZ - E-commerce'})
})



app.get('/softwares', (req, res) => {
  res.render('softwares', {title: 'AZ - software'})
})





















app.use((req, res) => {
  res.status(404).render('not-found', {title: "not found"})
})
