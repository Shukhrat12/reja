const http = require("http");
const mongodb = require("mongodb")

const connectionString = "mongodb+srv://shukhrat:cdLIPROge5C4SMWH@cluster0.rizdgwn.mongodb.net/Reja?retryWrites=true&w=majority"
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
      let PORT = 7008;
      server.listen(PORT, function () {
        console.log(`The server is running on port: ${PORT}, http://localhost:3000`);
      });
    };
  });