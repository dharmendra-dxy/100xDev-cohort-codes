const express = require("express");
const zod = require("zod");

const app = express();
const PORT = 3000;

// middleware:
app.use(express.json());

// schema for zod validation: -> an array of string
const schema = zod.array(zod.string()); 


app.post("/user", function(req, res){

    // user = ["Dharmendra", "Yadav"];
    const user = req.body.user;
    const response = schema.safeParse(user);

    if(!response.success){
        res.status(411).json({
            msg : "Invaid input",
        });
    }
    else res.send(response);

});

app.listen(PORT, ()=> console.log("Server is runing at PORT ", PORT));