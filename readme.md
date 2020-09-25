# Robobai Assignment

                  HTML5, CSS3, Javascript/ Angular9, Node.js, mongodb


a) Build a single page HTML5 web application, preferably on Angular 9 b) Backend should be on latest the Node JS.  

c) Home page should have a search box where user can search for the  product names. User should be shown an Auto Suggestion based on what  he types in the search box. 

d) When user hits the enter button show the correct product details below.  User should be able to edit the product name and selling price only 

e) Product details will be ID, product name, cost per unit, selling price per  unit and no of units available 

f) User will be able to edit product name, and selling price only rest of the  fields are uneditable. On Hitting enter in the input field data should be  saved 

g) Validation: Product name should be alpha numeric character and selling  price is numeric and cannot be less than the cost price 

h) There should be another tab on the home screen called “EDIT”. User  should be able to add new products from this screen 

i) Mongodb is preferred as the database


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install packages.

## Client(Angular) 

```bash
git clone https://github.com/anshumanpatil/robobai.git
cd robobai
cd client
npm install
npm start
```
## Web App Will be served at http://localhost:4200








## Server(NodeJS-Nest) 

```bash
git clone https://github.com/anshumanpatil/robobai.git
cd robobai
cd server
npm install
npm run start:dev
```
## NodeJS Backend Will be served at http://localhost:5656
## Documentation Will be served at http://localhost:5656/document






## Postman Collection

```bash
git clone https://github.com/anshumanpatil/robobai.git
cd postman-collection

       You can import postman collection from here to test api
```

## Docker Installation 

```bash
git clone https://github.com/anshumanpatil/robobai.git
cd docker 
docker build -t client . -f Dockerfile.client
docker build -t server . -f Dockerfile.server
docker run -it --rm -d -p 8080:80 --name frontend client
docker run -it --rm -d -p 5656:5656 --name backend server
```

## NodeJS Backend Will be served at http://localhost:5656
## Web App Will be served at http://localhost:8080