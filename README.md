# App Overview:

This app was built to allow me to practice configuring webpack, as well as some additional practice with APIs. It takes some input text and check with a Natural Language Processing API to see whether that text appears to be ironic in tone.


## Getting Started:

Once you have the project files and have navigated to the project root directory, start the server by entering `npm start` in your command line.
Next open your browser and navigate to localhost:8081 to see the app.
Finally, enter some text and click the button to Check for Irony. The app will let you know whether the Natural Language Processing api considers your text to be Ironic or Unironic.


### Notable Dependencies:
The app has a dev and prod environment with slightly different configurations in each.

The following dependencies are used in this project:
    "@babel/core": "^7.16.12",
    "@babel/plugin-transform-runtime": "^7.16.10",
    "@babel/preset-env": "^7.16.11",
    "babel-loader": "^8.2.3",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^25.3.0",
    "mini-css-extract-plugin": "^0.8.0",
    "node-sass": "^4.12.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "terser-webpack-plugin": "^1.3.0",
    "webpack-dev-server": "^3.7.2",
    "workbox-webpack-plugin": "^6.4.2"
