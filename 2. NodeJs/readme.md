### What is ECHMAScript?
Echmascript is a sripting language specification on which Javascript is based.
EchmaScript versions - ES5, ES6/ ES2015, ES2017

---
### What is JavaScript?
Javascript is a scripting language that confirms to the ECHMAScript specification.
JavaScript includes some features which are not a part of ECHMAScript such as DOM manipulation, setTimeout.

Common Js Browser engine:
1. **V8** : used by Google chrome
2. **SpiderMonkey** : used by firefox browser

---
### What is NodeJs?
NodeJs is a run time environment of javaScript.
 
Some smart people took out the V8 engine, added some **Backend** things (file system) on the top of it to create a new runtime environment.

NodeJs is written in C language.

---
### What is Bun?
Bun ia also a run time environment for JS,  but it is faster than NodeJS.

Bun is written in **Zig** language.

---

# What you can do with NodeJS?
1. Create CLIS
2. Create a videogame
3. create a game
4. create a **HTTP server**

## What is a HTTP server?
HTTP - Hyper Text Transfer Protocol

A protocol that defines for machines to communicate.

HTTP server is a set of some codes that follows HTTP protocol and is able to communicate with client (Browser/mobile).
 
---

## HTTP Protocol
**Thing client need to worry about:**
1. Protocol (HTTP/ HTTPS)
2. Address (URL/Ip/Ports) 
3. Route
4. Headers, Body, Query Params
5. Method 

**Things server needs to worry about:**
1. Response header
2. Response Body
3. Status Code

**Usually communication happens like this:**

``` https://chat.openai.com/backend-api/conversation ```

here: 
- Protocol : https
- URL : chat.openai.com
- Route : backend-api/conversation

**What happens in browser when you send a request?**

1. Browser parser the URL.
2. Does a DNS lookup (converts google.com to an IP).
3. Establishes a connection to the IP (does handshake).


**Common methods you can send to your Backend Server :**
- GET
- POST
- PUT
- DELETE

**Common status Code the Backend responds with :**
- 200 - Everything is ok
- 404 - Page/ route is not found
- 403 - Authentication issue
- 500 - Internal server error

## Create a EXPRESS Server on vs code :

### Whats is Express ?
Express is a library of NodeJs used in creating a server.

Some terminal command

1. Check version of node : ``` node -v```

2. Install package.json file : 
``` npm init -y```
3. Install dependecies : ``` npm i dependecyName```

4. Install Express : ``` npm i express```  

