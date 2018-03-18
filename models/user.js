var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var userschema=new Schema({
	title:{type:String},
	url:{type:String},
	description:{type:String}

});

var Video=mongoose.model('videos',userschema);
module.exports=Video;