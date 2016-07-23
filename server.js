var   express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      mongodb = require('mongodb'),
      request = require('request'),
      md5 = require('md5'),
      app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

var MongoClient = mongodb.MongoClient;

var mongoUrl = 'mongodb://localhost:27017/db_api';

// set up backend routes here

app.get('/', function(request, response) {
response.json({"description": "Welcome"});
});


app.get('/twitterz', function(req, response) {
  response.json({"descrtipion": "Twitter endpoint"});
  console.log("Twitter");
});



/* tell our app where to listen */
app.listen(3000, function(){
   console.log('listen to events on a "port".')
 });
