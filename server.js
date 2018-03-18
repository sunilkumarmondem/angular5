var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var app=express();
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/simple');
var routes=require('./routes/api');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(routes);
app.use(express.static(__dirname+'/project/dist/'))

app.get('*',function(req,res){
	res.sendFile(path.join(__dirname+'/project/dist/index.html'));
});


app.listen(8080,function(){
	console.log("server started already");
});