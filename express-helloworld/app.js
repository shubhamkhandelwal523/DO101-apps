var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.listen(5490, function () {
  console.log('Example app listening on port 8080!');
});

