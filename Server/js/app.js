


window.onload=function(){

var loadbutton = document.getElementById("load-btn");
var remotebutton = document.getElementById("remote-btn");
var infocontainer = document.getElementById("box");
var signin = document.getElementById("sign-in");
var title = document.getElementById("title");

function(req,res) {var html = window.res.remoteAddress + window.res.name;
title.insertAdjacentHTML('beforeend',html);}


    signin.addEventListener("click", function() {
  /*console.log("the button was clicked"); ;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost:3000/db');
    ourRequest.onload = function()
    {
      if (ourRequest.status >= 200 && ourRequest.status < 400)
      {
        var data = JSON.parse(ourRequest.responseText);
      if(validation(data)){
        window.open("../html/welcome.html","_self")
      }
      } else
      {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest.onerror = function()
    {
      console.log("Connection error");
    };

    ourRequest.send();
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;
    var credentials = "{username: '"+username+"', password: '"+password+"'}";
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST', 'http://localhost:3000/');
    ourRequest.body-parser(credentials);
    ourRequest.onload = function(){
      if (ourRequest.status >= 200 && ourRequest.status < 400)
      {
        window.open("../html/welcome.html","_self")
      }
    };

    */
    ourRequest.open('GET', 'http://localhost:3000/db');
    ourRequest.onload = function()
    {
      if (ourRequest.status >= 200 && ourRequest.status < 400)
      {
        var data = JSON.parse(ourRequest.responseText);
        if(validation(data)){
        window.open("../html/welcome.html","_self")
      }
      } else
      {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest.onerror = function()
    {
      console.log("Connection error");
    };

    ourRequest.onerror = function()
    {
      console.log("Connection error");
    };

    ourRequest.send();

  });

  function renderHTML(data)
  {
    var htmlString = data;
    //var htmlString = "<p> "+ data.people[0].first_name+ " " + data.people[0].last_name+ "'s username is " + data.people[0].username + " and password is " +  data.people[0].password + ".</p>";
    title.insertAdjacentHTML('beforeend', htmlString);
    console.log(htmlString);
    console.log("shoulda outputted");
  }

  function validation(data)
  {
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;

    if( username ==='' || password ==='')
    {
      console.log("Please fill all fields...!!!!!!");
      return false;
    }
    else
    {
      for(var i = 0; i < data.length; i++)
        {
          if(username === data[i].username && password === data[i].password)
            {
              console.log("Verification Succesful");
              return true;
            }
          }
        }
      console.log("Verification Failed");
      return false;
    }
  }
