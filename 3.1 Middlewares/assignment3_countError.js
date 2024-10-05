const express = require('express');
const app = express();
const PORT = 3000;
let errorCount = 0;

// You have been given an express server which has a few endpoints. Your task is to:
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable,
//  whose value should go up every time there is an exception in any endpoint

// middleware: errorHandling
function errorHandling(err, req, res, next){
    res.status(404).send({});
    errorCount = errorCount+1;
}


// pre-defined routes:
app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// middleware calling:
app.use(errorHandling);

app.listen(PORT, ()=> console.log("Server is running succesfully at PORT: ", PORT));