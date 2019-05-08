# Weather app

This app was made during the course of the [node tutorial](https://www.udemy.com/the-complete-nodejs-developer-course-2/) by [Andrew Mead](https://github.com/andrewjmead).

This web based application runs on a nodejs backend.
- The app returns a summary of the weather for a location entered by the user
- It uses the [Mapbox API](https://www.mapbox.com/) to decode the lat and lon of a given location
- It uses the [Darksky API](https://darksky.net/dev) to get the weather data
- Future plans exist to integrate my own weather station to send weather data and predictions for bangalore

You can experience the app at [heroku](https://amrith-weatherapp.herokuapp.com/)

To run the app on your local system follow the steps below
- register for Mapbox and darksky api keys and keep them handy to insert to the .env file
- open terminal or command prompt
- navigate to a folder which you would like to use to test or run the app
- clone this repo using `git clone https://github.com/Amrithnath/Weatherapp `
- from inside the project directory run the command `npm install` to install all dependencies
- create a `.env` file at the root of the directory
- make two entries in the .env file as `key = 'Your dark sky API key'` and `Mapbox= 'your mapbox API key'`
- run the project using the command `npm run start` within the project directory
- if you want to contribute to the project and use the development environment (dev dependency : nodemon) run the command `npm run dev instead`
- this will serve the project page at `localhost:4000` navigate to the [link](localhost:4000) to view the app