let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';
let cssPath = __dirname + "/public";
let bodyParser = require('body-parser');

///////////////////////////////////////////////////

// 12 Get Data from POST Requests // NOT WORKING
// app.post("/name", function(req, res) {
//   // Handle the data in the request
//   var string = req.body.first + " " + req.body.last;
//   res.json({ name: string });
// });

///////////////////////////////////////////////////

//11 Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

///////////////////////////////////////////////////

// 10 Get Query Parameter Input from the Client
// app.get('/name', (req, res) => {
//   const firstName = req.query.first;
//   const lastName = req.query.last;

//   // OR
//   // var { first: firstName, last: lastName } = req.query;
//   res.json({
//     name: `${firstName} ${lastName}`
//   });
// });

///////////////////////////////////////////////////

// 9 Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res) => {
  const word = req.params.word;
  res.json({
    echo: word
  });
});

///////////////////////////////////////////////////

// 8 Chain Middleware to Create a Time Server
// app.get("/now", (req, res, next) => {
//   req.time = new Date().toString();
//   next();
// },
//   (req, res) => {
//     res.send({
//       time: req.time
//     });
//   });

// // OR
// // const middleware = (req, res, next) => {
// //   req.time = new Date().toString();
// //   next();
// // };

// // app.get("/now", middleware, (req, res) => {
// //   res.send({
// //     time: req.time
// //   });
// // });

///////////////////////////////////////////////////

// 7 Simple logger function
// app.use((req, res, next) => {
//   console.log(req.method + " " + req.path + " - " + req.ip);
//   next();
// });

// OR
// app.use(function(req, res, next) {
//   let string = `${req.method} ${req.path} - ${req.ip}`;
//   console.log(string)
//   next();
// });

///////////////////////////////////////////////////

// 6 Allow to use ENV VAR
app.get("/json", (req, res) => {
  const mySecret = process.env.MESSAGE_STYLE
  if (mySecret === "uppercase") {
    res.json({
      message: "Hello json".toUpperCase()
    })
  } else {
    res.json({
      message: "Hello json"
    })
  }
});

///////////////////////////////////////////////////

// 5 Allow to use JSON
app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});

///////////////////////////////////////////////////

// 4 Allow to use CSS
app.use("/public", express.static(cssPath));

///////////////////////////////////////////////////

// 3 Allow to use index.html file
app.get("/", function(req, res) {
  res.sendFile(absolutePath);
});

///////////////////////////////////////////////////

// 2 Allow to use browser for text
app.get("/", function(req, res) {
  res.send("Hello Express");
});

///////////////////////////////////////////////////

// 1 Allow to debug in console
console.log("Hello world");

///////////////////////////////////////////////////

module.exports = app;
