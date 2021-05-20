# Product Inventory API

## Getting started

* Download Node and npm
* `npm install` to install all node dependencies
* setup a .env file
    * set `NODE_ENV` to development
    * set `PORT` to your preferred port
    * set `MONGO_URI` to your mongoDB connection string
    * set `JWT_SECRET` to your secret
* run `npm start` to start the server
* run `node seeder` to seed databases with company data and product data
    * run `node seeder -d` to delete entire database

## REST API
```
    POST    /api/users/login                     Login with your company credentials
    POST    /api/users                           Register a new company 
    GET     /api/products                        Get all company products
    DELETE  /api/products/{id}                   Delete a product by product id
    POST    /api/products                        Create a new product
    PUT     /api/products/{id}                   Edit a product by product id
    
```