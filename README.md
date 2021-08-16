# Matchmaker

## Table of contents
- [Introduction](#Introduction)
- [Getting Started](#Getting-Started)
- [Limitations](#Limitations)
- [Technologies](#Technologies)

## Introduction
This application allows users to generate all possible words from a given string of digits between 2 to 9, using the T9 predictive text number-to-letter model.

It was developed on the front-end with the create-react-app template with redux as the state management tool. The back-end was developed with node on an expressJS server.

Testing is performed using the Jest library. On the front-end, the react-testing-library is used to test the rendering of components, and the API call with fetch is mocked using Jest.spy.

## Getting Started

The application has been built with both server and client in a single repo. The following steps will set-up the application on a local device.

1. Clone this repo

   ```bash
   git clone https://github.com/simonaus/edume.git
   cd edume
   ```

2. Enter the back-end and install the npm dependencies

   ```bash
   cd server
   npm install
   ```

3. The server will run on localhost:3005 by default. If you do not wish to change this, skip over this step. In order to change which port the server is run on, create a file called '.env'. Input the following code, substituting "NUMBER" with the port number of your choice

   ```bash
   PORT=NUMBER
   ```

4. Start the server

   ```bash
   npm start
   ```

5. In a separate terminal window enter the front-end and install the npm dependencies

   ```bash
   cd edume
   cd client
   npm install
   ```

6. The API will connect to localhost:3005 by default. If you do not wish to change this, skip over this step. In order to change which port the connects to enter the file './src/services/api.js' and change the port number on line 3 to match the port number in Step 3 above.

7. Run the front end and open the app in a brower window

   ```bash
   npm start
   ```

8. To run the back-end tests, enter the server file and run the npm test script

   ```bash
   cd server
   npm test
   ```

9. To run the front-end tests, enter the client file and run the npm test script

   ```bash
   cd client
   npm test
   ```


## Limitations

- Users can only enter one word at a time. The space between words provided by the digit 0 is not permitted
- Words are generated only upon submission of the string. Generating words live as each new digit is added would have demanded a high number of API calls
- Generated words are not saved between submissions, each new submission will generate a new list of words independent of previous searches
- Generated words are not filtered to only include real words in English

## Technologies

- Javascript
- React
- Redux
- Node
- ExpressJS
- Jest
- react-testing-library


