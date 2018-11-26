// API to integrate with chat bot
	
	var express = require('express');
	var socket = io("https://agentlivechat.herokuapp.com/");
	var app = express();

	app.post('/setCustomerName', function (req, res) {
		
		console.log( 'Request object: '+req );
		socket.emit('setUserName', {userName : req.body.userName, userType : req.body.userType});
		
		res.status(200).send({
			success: 'true',
			message: 'setUserName successfully triggered'
		})
	})

	var server = app.listen(4000, function () {
	   var host = server.address().address
	   var port = server.address().port
	   console.log("Example app listening at http://%s:%s", host, port)
	})