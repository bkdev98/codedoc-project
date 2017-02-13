var hackerEarth = require('hackerearth-node');
var fs = require('fs');
var express = require('express');

var app = express();

app.use(express.static('public'));
var hackerEarth = new hackerEarth (
  'd0b2bb5a8043bf8231432be6c6be3e2bda1da7d1',
  null  //mode sync=1 or async(optional)=0 or null async is by default and preferred for nodeJS
);
var config = {};
config.time_limit = 1;
config.memory_limit = 323244;
config.source = fs.readFileSync('c-source/hello-world.c').toString();
config.input = "6 9";
config.language = "C";

// hackerEarth.compile(config)
//   .then(result => {
//     return console.log('Compile successfully')
//   })
//   .catch(err => {
//     return console.log(err);
//   });

hackerEarth.run(config)
  .then(result => {
    return console.log(JSON.parse(result).run_status.output);
  })
  .catch(err => {
    return console.log('Error')
  });
//
// app.post('/', (req, res) => {
//   return console.log('Push');
// });
//
// app.listen(6969, (err) => {
//   console.log('Server is up on port 6969.');
// });
