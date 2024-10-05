## MIDDLEWARES 
syntax :
``` 
function (req, res, next){
    // do something with req,res;
    next();
}
```
next() is required to call the other middlewares if exists or to move to further code flow.

some commone middlewares:

1. To parse json requests : ```app.use(express.json())```
2. To parse form data requests : ```app.use(express.urlencoded({extended: false}));```

## Middlewares Assignment
 - You have to create a few standard middlewares for your application.
 - You have to create a middleware for logging the number of requests on a server
 - You have to create a middleware for rate limiting a users request based on their username passed in the header
 - You have to create a middleware for logging the number of errors on a server



## Global Catches

Global catches helps you give the user a Better error message.

```
app.use((error, req,res,next) => {
    console.error(error);
    return res.status(500).send("Error has occured");
});
```

## Input Validation using ZOD

**Zod** is a library used for inpur validation.

Install Zod: ``` npm install zod```

eg:
```
user = {
    email : string,
    password: at least 8 chars,
    country : "IN", "USA",
}

// zod valdation for above user structure:

const schema = zod.object({
    email : zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("USA)),
});
```
