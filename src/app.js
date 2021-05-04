const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const bodyParser = require('body-parser');
const forcast = require('./utiles/forecast');
const geocode = require('./utiles/geocode');

// Define Path for express config
const publicDirPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../template/views');
const partialPath = path.join(__dirname,'../template/partials' );

// setup static directory to serve
app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('',function(req,res){
   res.render('login');
});

app.get('/registration',function(req,res){
    res.render('registration');
});

app.get('/home',function(req,res){
    res.render('home',{
        title: 'Home Page',
        createdBy: 'Arun'
    });
});

app.get('/help',function(req,res){
    res.render('help',{
        title: 'Help Page',
        helpText: 'Some useful help text',
        createdBy: 'Arun'
    });
})

app.get('/about',function(req,res){
    res.render('about',{
        title: 'About Me',
        createdBy: 'Arun'
    })
});

app.put('/student/:id',(req,res)=>{
    console.log("body...",req.body);
    console.log("query-----",req.query);
    console.log("param--------",req.params);

    res.status(400).send("put method...")
});

app.get('/weather',function(req,res){
    geocode(req.query.city, (err, result)=>{
        if(err){
            res.status(500).send(err);
            return;
        }
        forcast(result,(err, result2)=>{
            if(err){
                res.status(500).send(err);
                return;
            }
            res.status(200).send({
                "forcast": result2
            });
        })
    })
});

app.get('*',function(req,res){
    res.render("404")
});

app.listen('8080', ()=>{
    console.log("the server is up on 8080 port")
});
