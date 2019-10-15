# liri-node-app
ask liri questions - she's a knockoff node siri who knows a few answers

## About the App
Liri is a siri-like app that can give you information about concerts, music and movies.

I connected this application with third-party programs (listed below) and wrote this server-side Node.js web application logic using JavaScript. 

## Overview
Liri runs on Node.js and utlizes the Spotify, BandsinTown and OMDB APIs.

In order to use Liri, you must first run "npm i" to install the following packages:
* axios
    * required for calling the BandsinTown and OMDB APIs
* node Spotify API
    * accesses the Spotify API
* moment.js
    * Translates concert dates into a readable format
* fs
    * allows Liri to access external txt files

Liri takes in the following commands:
* **spotify-this-song** + song title
    * returns the Artist, Song Name, Album and Spotify link of the song requested
* **concert-this** + musical artist
    * returns the venue, location and date of the next concert of the artist requested
* **movie-this** + movie
    * returns the title, release year, rating, country produced, language, plot and actors for the movie requested
* **do-what-it-says**
    * returns a random search pulled from the random.txt file

## Try it out!
You can try Liri for yourself by [following this link to my Github repository](https://github.com/xemotionalx/liri-node-app).

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development