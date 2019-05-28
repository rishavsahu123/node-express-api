data = [{item:'rishav'}, {item:'yash'}, {item:'akash'}]
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({extended: false})

module.exports = function todoController(app){
    app.get('/', function(req, res){
        res.send('welcome to todoapp');
    })
    app.get('/home', function(req, res){
        res.render('home',{data:data})
    })
    app.post('/home', urlencodedparser, function(req, res){
        data.push(req.body)
        res.json(data) //pass data to ajax
    })
    app.delete('/home/:item', function(req, res){
        data = data.filter((obj)=>{
           return obj.item !== req.params.item
        })
        res.json(data)
    })
};