//file to run your Express application. to run on port 4999 instead on command line: PORT=4999 npm ./src/server.js

const { PORT = 5000 } = process.env;
const app = require("./app");

const listener = () => console.log(` You are listening on Port ${PORT}!`);
app.listen(PORT, listener);
