var express = require('express');
var app = express();
app.use(express.logger());

function readContent(callback) {
    fs.readFile("./Index.html", function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    });
}

readContent(function (err, content) {
    console.log(content)
});
>>>>>>> d4f0a83979ebb03b15d8a66f1ce9e863ea5efeec
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
