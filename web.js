var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
<<<<<<< HEAD
  response.send(fs.readFileSync('index.html'));
=======
  response.send('Hello World 2!');
>>>>>>> d4f0a83979ebb03b15d8a66f1ce9e863ea5efeec
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
