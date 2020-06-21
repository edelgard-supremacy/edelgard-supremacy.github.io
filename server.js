const express = require('express');
const app = express();
const assets = require('./assets');

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.use(express.json());

app.post("/submit", function (request, response) {
  var jsonInfo = '{ "count" : "' + request.body.count + '" }';
  const fs = require('fs');
  fs.writeFile('public/count.json', jsonInfo, (err) => { 
      // In case of a error throw err. 
      if (err) throw err; 
  }) 
  response.end("Server received json " + jsonInfo);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
