# Cat Finder
Creating a companion matching app.... for cats :)

1/18/2020
Version 1

# Basic Use
Cat Finder is mhy first full stack application. A user begins by clicking "Go to survey"

This displays input name and image information for your cat, and survey questions to choose the traits of their current cat.

After completing the forms, and clicking the submit button at the bottom, the cat with the best matching stats is displayed!

Links to the cat list API and the github repository are at the footer

# App Organization

### home.html
1. Survey button with a route that takes the user to the survey

### survey.html
1. Home button that takes the user to home
2. Forms to input your little meower's name and image
3. Survey of 10 questions with values on each question
4. Submit button routed to post data to friends API, and then displays the best match using a modal. If forms are incomplete, a modal is toggled that instructs you to complete them to proceed

### friends.js
1. Data of the cat friends are here

### htmlRoutes.js
1. Routes to the HTML, there is a home and a survey page

### apiroutes.js
1. Routes to the friends.js API
2. Best match is calculated here using hxrdcore javascript subtraction
3. Best match is posted to the survey HTML modal
4. New created friend is pushed to the friends.js API


## Technologies used
1. Javascript
2. NodeJS packages
3. Heroku
4. HTML
5. API

## Developers
1. Miguel Delos Santos

## Future Development
1. Add login for users
2. Add preferences of behaviors your cat likes in other cats, instead of just behaviors of your cat

Thanks for reading!

(//)<(0.0)>(//)

1/18/2020