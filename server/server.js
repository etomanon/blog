const express = require('express'),
  app = express(),
  port = 8080,
  bodyParser = require('body-parser'),
  morgan  = require('morgan');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const routes = require('./api/routes');
routes(app);

app.listen(port);

console.log('Blog RESTful API server started on: ' + port);



// {
//   "posts": [
//     {
//       "id": "519c2e60-247e-11e9-9929-b50b0dfd049b",
//       "title": "Motorsport",
//       "categories": ["sport", "cars"],
//       "content": "Lorem ipsum lorem ipsum",
//       "dateCreated": 1548846056518
//     },
//     {
//       "id": "52c740e0-247e-11e9-9929-b50b0dfd049b",
//       "title": "Orange",
//       "categories": ["food"],
//       "content": "Lorem ipsum lorem ipsum",
//       "dateCreated": 1548846058478
//     },
//     {
//       "id": "54b2bd30-247e-11e9-9929-b50b0dfd049b",
//       "title": "Dog",
//       "categories": ["pets"],
//       "content": "Lorem ipsum lorem ipsum",
//       "dateCreated": 1548846061699
//     }
//   ]
// }