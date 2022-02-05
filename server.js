const express = require('express');
const ejs = require('ejs');
const io = require('socketio')(server);
const { v4:uuidv4 } = require('uuid');
const app = express();
const server = require('http').Server(app);



app.set('view engine','ejs');
app.use(express.static('public'));


app.get('/',function(req,res){
	res.redirect(`/${uuidv4()}`);
});

app.get('/:room',function(req,res){
	res.render('room',{ roomId : req.params.room })
})

io.on('connection',socket => {
	socket.on('join-room',function(){
		console.log('We have joine dthe room');
	})
})

server.listen(3030,function(){
	console.log("Server STarted");
});








