require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var keys = require("./keys");
var request = require("request");
var fs = require("fs");

var getNames = function(artist) {
    return console.log(artist.name);
  };

