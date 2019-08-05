# Learn Express Router

install express dependency with npm :

```sh
npm instal express --save
```

or using yarn :

```sh
yarn add express
```

## Routing

Routing is basically matches the functions you wrote with the requests that server gets.

This project structure will be like this :

```sh
.
+-- routes
|   +- users.js
+-- app.js
+-- package.json
+-- yarn.lock
+-- README.md

```

routes folder is placed by route file, for example is users / category / or anything.
that folder is handle route whatever the http method.

### HTTP VERB / METHOD

```sh
app.get('/', (req, res) => { /* */ })
app.post('/', (req, res) => { /* */ })
app.put('/', (req, res) => { /* */ })
app.delete('/', (req, res) => { /* */ })
app.patch('/', (req, res) => { /* */ })
```

Those methods accept a callback function, which is called when a request is started, and we
need to handle it.

```sh
(req, res) => res.send("Hello World")
```

Express sends us two objects in this callback, which we called req and res , that represent
the Request and the Response objects.

### Routing have many different way to make a route

```sh
const express = require("express");
const router = express.Router();
```

Declare and initialize express router

How to route ? Here is some code :

```sh
router.get("/hello", (req, res) => {
  res.status(200).send({
    msg: "HALLO DUNIA"
  });
});
```

and the bottom of the route file :

```sh
module.exports = router;
```

and the last part is use in app.js or server.js

```sh
app.use("/api/v1", require("./routes/users"));
```
