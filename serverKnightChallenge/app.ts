// import express (after npm install express)



const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
// create new express app and save it as "app"
const app = express();
app.use(cors())
// server configuration
const PORT = 8080;
app.use(bodyParser.json({ type: ["json", "text"] }));

// parse application/json

// create a route for the app
app.get('/', (req, res) => {
  res.send('Server is running ...');
});


app.post('/is_possible_move', (req, res) => {

  console.log(req.body)
  let currentCord=req.body.currentCord
  let targetCord=req.body.requiredCord
  let rowDiff = Math.abs(currentCord.row - targetCord.row)
  let colDiff = Math.abs(currentCord.col - targetCord.col)

   rowDiff && colDiff && (colDiff + rowDiff == 3) ?res.json({msg:"good move"}) :  res.status(404).end("impossible move");
  //  res.send("hello")
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});