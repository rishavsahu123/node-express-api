data = ['rishav', 'yash', 'akash']
module.exports = function todoController(app){
    app.get('/', function(req, res){
        res.send('welcome to todoapp');
    })
    app.get('/home', function(req, res){
        res.render('home',{data:data})
    })
};