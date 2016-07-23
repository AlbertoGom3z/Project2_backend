var   express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      mongodb = require('mongodb'),
      request = require('request'),
      md5 = require('md5'),
      app = express();

app.use(cors());

app.use(bodyparser.urlencoded)({extended: true}));

var MongoClient - mongodb.MongoClient;

var mongoUrl = 'mongodb://localhost:27017/db_api';


// set up backend routes here

Get Request


Post Request


/***************** our backend routes ******************************/

/* welcome page */
app.get('/', function(request, response){
  response.json({"description":"Welcome to the MARVEL API demo"});
});



/***************** routes for `marvel` endpoint ********************/

/* marvel endpoint welcome page */
app.get('/marvel', function(req, response) {
  // sends to FE & displays at localhost:3000
  response.json({ "description" : "Marvel endpoint"});
  // prints to terminal:
  console.log("MARVEL");
}); // end welcome

/* marvel search */
app.post('/marvel/search', function(req, res) {

  /*
  example of a full query to Marvel:
  http://gateway.marvel.com:80/v1/public/characters?ts=1468935564884&apikey=a84d62b5bd7673df78f442876bf34b83&hash=ffdd7dd65eec8d8f651b74bec7a1d603&name=hulk
  */

  var baseUrl = "http://gateway.marvel.com:80/v1/public/";
  var endpoint = req.body.endPoint;
  var tsQueryString = '?ts=';
  var ts = Date.now();
  var apiKeyQueryString = "&apikey=";
  var MARVEL_PUBLIC_API_KEY = process.env.MARVEL_PUBLIC_API_KEY;
  var MARVEL_PRIVATE_API_KEY = process.env.MARVEL_PRIVATE_API_KEY;
  var hashQueryString = '&hash='
  var hash = md5( ts + MARVEL_PRIVATE_API_KEY + MARVEL_PUBLIC_API_KEY);
  var queryString = req.body.queryString;

  var fullQuery = baseUrl + endpoint + tsQueryString + ts + apiKeyQueryString + MARVEL_PUBLIC_API_KEY + hashQueryString + hash + queryString;

  console.log("fullQuery:", fullQuery); // prints to terminal

  request({
    url: fullQuery,
    method: 'GET',
    callback: function(error, response, body) {
      // console.log(body);
      // console.log(response);
      res.send(body);
    }
  })

}); // end post request



/***************** routes for `favorites` endpoint ********************/

// this is the same as the original Marvel solution //


/* tell our app where to listen */
app.listen(3000, function(){
  console.log('listen to events on a "port".')
});
