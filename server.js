const http = require("http");
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://cluster0.rizdgwn.mongodb.net/Reja?authSource=admin"
mongodb.connect(connectionString, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, (err, client) => {
    if(err) {
      console.log("ERROR on DB connection")
    } else {
      console.log("Connection with DB was successful")
      module.exports = client; 
      const app = require("./app")
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(`The server is running on port: ${PORT}, http://localhost:3000`);
      });
    };
  });