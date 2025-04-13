# Netflix Gpt

- Create React App
- Configured TailwindCSS
-Header
-Routing of App
- Login Form
- Sign up Form
- Form Validation
- Validation component added under Utils
- Integration Login Authentication to Firebase and Deploy API online
- now we target to store user credentials/data into REDUX Store.
-install REDUXJS toolkit and REDUX-REACT package  

before running command  - `firebase login`. install firebase CLI using the command below
~npm install -g firebase-tools~

~firebase login~
~firebase init~
once firebase setup is done
~npm run build~ means we are telling to firebase to deploy our app through this build folder.
~firebase deploy~ cmd to deploy our app

Go through the docs  for creating password based account
~https://firebase.google.com/docs/auth/web/password-auth~

# Features
- Login/Sign Up
    -Signin/ Sign up Form
    -redirect to Browse Page
-Browse (after authentication)
    -Header
    -Main Movie
        -Trailer in Background
        -Title & Description
        -Movie Suggestions
            -Movie Lists * N
-NetflixGPT
    -SearchBar
    -Movie Suggestions


-Install React Router DOM
    ~npm i -D react-router-dom~
    ~npm i react-redux~
