var express=require('express');
var router=express.Router();
var Video=require('../models/user');

router.post('/videos',function(req,res){
	var video=new Video(req.body);
	video.save().then(function(data){
		res.send(data);
	})
});


router.get('/videos',function(req,res){
	Video.find({}).then(function(data){
		res.send(data);
	})
});

router.get('/videos/:id',function(req,res){
	Video.findById({_id:req.params.id}).then(function(data){
		res.send(data);
	})
});

router.put('/videos/:id',function(req,res){
	Video.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
		Video.findOne({_id:req.params.id}).then(function(data){
			res.send(data);
		})
	})
});

router.delete('/videos/:id',function(req,res){
	Video.findByIdAndRemove({_id:req.params.id}).then(function(data){
		res.send(data);
	})
});



module.exports=router;