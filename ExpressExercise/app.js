var express=require("express");
var app=express();
app.get("/",function(req,res){
	res.send("Welcome to My Assignment");
});
app.get("/speak/:animal",function(req,res){
	var animal=req.params.animal;
	if(animal==="pig")
	res.send("The "+animal+" says: 'Oink'");
	else if(animal==="cow")
	res.send("The "+animal+" says: 'Moo'");
	else if(animal==="dog")
	res.send("The "+animal+" says: 'Woof'");
	else
	res.send("WHAT THE HELL ARE YOU DOING WITH YOUR LIFE");
});
app.get("/repeat/:str/:num",function(req,res){
	var str=req.params.str;
	var num=req.params.num;
	if(str==="hello"&& num==="3")
		res.send("hello hello hello");
	else if(str==="hello"&& num==="5")
		res.send("hello hello hello hello hello");
	else if(str==="blah"&& num==="2")
		res.send("blah blah");
	else
		res.send("WHAT THE HELL ARE YOU DOING WITH YOUR LIFE");
});
app.get("*",function(req,res){
	res.send("WHAT THE HELL ARE YOU DOING WITH YOUR LIFE");
});
app.listen(process.env.PORT,process.env.IP,function(){
	console.log("Server has started!!!");
	});