## Installation

Use the package manager [npm](https://www.npmjs.com/) to install packages.

## Client(Angular) 

```bash
git clone https://github.com/anshumanpatil/print.git
cd robobai
cd client
npm install
npm start
```
## Web App Will be served at http://localhost:4200








## Server(NodeJS-Nest) 

```bash
git clone https://github.com/anshumanpatil/print.git
cd robobai
cd server
npm install
npm run start:dev
```
## NodeJS Backend Will be served at http://localhost:5656
## Documentation Will be served at http://localhost:5656/document






## Postman Collection

```bash
git clone https://github.com/anshumanpatil/print.git
cd postman-collection

       You can import postman collection from here to test api
```

## Docker Installation 

```bash
git clone https://github.com/anshumanpatil/print.git
cd docker 
docker build -t client . -f Dockerfile.client
docker build -t server . -f Dockerfile.server
docker run -it --rm -d -p 8080:80 --name frontend client
docker run -it --rm -d -p 5656:5656 --name backend server
```

## NodeJS Backend Will be served at http://localhost:5656
## Web App Will be served at http://localhost:8080