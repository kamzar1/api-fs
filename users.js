var express = require('express');
var app = express();
var fs = require("fs");

var file=__dirname + "/db/" + "users.json"
//var file=__dirname + "/" + "users.json"

var delid = 2;
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get('/listUsers', function (req, res) {
   fs.readFile( file, 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( file, 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( file, 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.delete('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile( file, 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + delid];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   //console.log("Example app listening at http://%s:%s", host, port)
   console.log("app listening at http://127.0.0.1:",port)
})
