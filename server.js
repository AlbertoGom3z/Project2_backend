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
