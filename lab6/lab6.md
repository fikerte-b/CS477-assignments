

Lab 5 - REST
Download the start-up project lesson05-server and lesson05-client projects or you create everything from scrtach.
Run "npm install" under lesson05-server to get express package installed.
Implement the features below inside lesson05-server REST applicaiton
CRUD(create, read, update, delete) books: make sure you use the proper URLs and HTTP Methods
A book has properties: id, title, ISBN, publishedDate, author
make proper changes in js files to implement the step 1 features
Use Postman to test your REST APIs
Implement the features below inside lesson05-client project. This project acts as SPA which make calls to lesson05-server APIs. You must have strong knowledge on JavaScript DOM APIs to complete the tasks. I highly recommand you to do this part if you have time.
Modify index.html, carousel.css to match your design
Write JS code in main.js to implement the feature:
List all books in index.html when open index.html in browser
Click "Submit" button to add a new book with properties: title, ISBN, publishedDate, author (id is auto generated)
Click "Update" button to Edit a book and save to server side
Click "Delete" button to remove a book from server side