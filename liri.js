require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var fs = require("fs");

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var request = process.argv.slice(3).join(" ");

runLiri();

function runLiri() {
    switch (command) {
        case "movie-this":
            if (request == null || request === "") {
                request = "mr nobody";
            }
            getMovie();
            break;
        case "spotify-this-song":
            if (request == null || request === "") {
                request = "the sign";
            }
            getSong();
            break;
        case "concert-this":
            if (request == null || request === "") {
                request = "taking back sunday";
            }
            getConcert();
            break;
        case "do-what-it-says":
            getRando();
            break;
    }
}

function getMovie() {
    axios.get("http://www.omdbapi.com/?t=" + request + "&y=&plot=short&apikey=trilogy").then(
            function(response) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.Ratings[0].Value);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country Produced: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            })
        .catch(function(error) {
            axiosErr();
        });
};

function getSong() {

    spotify
        .search({ type: 'track', query: request, limit: 1 })
        .then(function(response) {
            console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
            console.log("Song Name: " + response.tracks.items[0].name);
            console.log("Spotify Link: " + response.tracks.items[0].external_urls.spotify);
            console.log("Album: " + response.tracks.items[0].album.name);
        })
        .catch(function(err) {
            console.log(err);
        });
};

function getConcert() {
    axios.get("https://rest.bandsintown.com/artists/" + request + "/events?app_id=codingbootcamp").then(
            function(response) {
                console.log("Name of Venue: " + response.data[0].venue.name);
                console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
                console.log("Date: " + moment(response.data[0].datetime).format("MM/DD/YY"));
            })
        .catch(function(error) {
            axiosErr(error);
        });
};

function axiosErr(error) {
    if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log("Error", error.message);
    }
    console.log(error.config);
};

function getRando() {
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");

        command = dataArr[0];
        request = dataArr[1];

        runLiri();
    });
};