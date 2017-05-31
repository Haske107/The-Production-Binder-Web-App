
//DEPENDENCIES
const express = require('express')
var bodyParser = require('body-parser')
var path = require("path")

//INITIALIZE SERVER
const server = express()
server.use(express.static(path.join(__dirname, 'pages')));
server.listen(3000, function () {
  console.log('Listening on port 3000')
})

//HTTP RESPONSES

    //GETs
          //REQUEST SIGN IN PAGE
          //Request to root redirects to sign in page.
          server.get('/', function (req, res) {
              res.sendFile(path.join(__dirname+ '/pages/html/index.html'));
              console.log("\nServing main page to " + req.connection.remoteAddress);
          });

          //REQUEST LOCATION DATA FROM LAT. LONG. POLYGON

                  //REQUEST NEWEST

                  //REQUEST MOST VIEWED

          //REQUEST COLLECTION DATA

    //POSTS
          //CREATE PROFILE

          //CREATE LOCATION

          //UPDATE LOCATION

          //UPDATE PROFILE

          //CREATE COLLECTION

          //UPDATE COLLECTION

          //DELETE COLLECTION

          //DELETE PROFILE

          //DELETE LOCATION


    server.post('/', function (req, res) {
      var username = ' ', password = '';
        req.on("data",function(chunk){
            console.log("Receiving data from" + username);
            username += chunk.toString();
        });
        req.on("end",function(){
        });
    });




//HELPER FUNCTIONS
function validateSignIn(username, password) {

}
