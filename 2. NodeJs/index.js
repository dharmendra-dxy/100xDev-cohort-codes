// require express:
const express = require("express");

const app = express();
const port = 3000;


// get request:
app.get("/", function(req, res){
    res.send("Hello world users !!");
});


// post request:
app.post("/post", function(req, res){

    // accesing headers and body:
    // console.log("Headers: ", req.headers);
    // console.log(req.body);

    res.send({
        msg: "2+2 =4",
    });
});


// listen port:
app.listen(port, function(){
    console.log(`Server is running at: ${port}`);
})

