<p align="center">
<a href="https://nodejs.org/">
  <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
</a>
</p>

<h1 align="center">
Library Backend RESTFulAPI
<br>
</h1>

<p align="center">
<img src="https://img.shields.io/badge/Node.js-v12.14.1-blue">
<img src="https://img.shields.io/badge/Express.js-v4.17.1-brightgreen">
<img src="https://img.shields.io/badge/Bcrypt-v4.0.1-red"
</p>

## Table of Contents

- [Introduction](#introduction)
- [How To Install](#how-to-install)
- [List of Endpoints](#list-of-endpoints)
- [Related Project](#related-project)
- [Contact](#contact)

## Introduction

Library-RESTfulAPI is a Library systems with restful api. The main features are:

- Login and Register with JWT.
- User, Book, Category and Loan database.
- CRUD User, Book, Category and Loan.
- File Image Upload on Book.
- Search book by name.
- Sort book by name and category.
- Book page pagination.
- Allowed CORS.

The Library-RESTfulAPI is written in Node Js with Express framework, it uses MySQL as data storage back-end and has a simple but intuitive user interface.

## How to Install

1. Clone this repository

   ```
   $ git clone https://github.com/ichvanul/LibraryWeb-Backend-ExpressJs-NodeJs.git
   ```

2. Create a database and import file to database sql.

3. Install all depedencies on the package.json

   ```
   $ npm install
   ```

4. Create `.env` file with environment variable in line with following:

   ```
   SERVER_PORT = 1000 (example)
   DB_HOST = "localhost"
   DB_USER = "your-user"
   DB_PASS = "your-password"
   DB_NAME = "your-database"
   PRIVATE_KEY = "your-private-key"
   URL = "http://localhost:1000/" (example)
   ```

5. Run
   ```
   $ npm start
   ```

## List of Endpoints

**USERS**

- **[GET]** /api/v1/users

  Get all users

- **[GET]** /api/v1/users/:id_user

  Get user detail

- **[PATCH]** /api/v1/users/:id_user

  Update user data

- **[DELETE]** /v1/users/:id_user

  Delete user

- **[POST]** /api/v1/users/register

  Register

  **Sample Data**

  ```
  name: your-name
  email: your-email
  password: your-password
  ```

- **[POST]** /api/v1/users/login

  Login user

  **Sample Data**

  ```
  email: your-email
  password: your-password
  ```

- **[POST]** /api/v1/users/logout

  Logout user

**CATEGORY**

- **[GET]** /api/v1/category

  Get all category

- **[GET]** /api/v1/category/:id_category

  Get category detail

- **[PATCH]** /api/v1/category/:id_category

  Update category data

  **Sample Data**

  ```
  name: your-name-category
  ```

- **[DELETE]** /v1/category/:id_category

  Delete category

- **[POST]** /api/v1/category

  Insert category

  **Sample Data**

  ```
  name: your-name-category
  ```

**BOOK**

- **[GET]** /api/v1/book

  Get all book

- **[GET]** /api/v1/book/:id_book

  Get book detail

- **[PATCH]** /api/v1/book/:id_book

  Update book data

- **[DELETE]** /v1/book/:id_book

  Delete book

- **[POST]** /api/v1/book

  Insert book

**LOAN**

- **[GET]** /api/v1/loan

  Get all loan

- **[GET]** /api/v1/loan/:id_loan

  Get loan detail

- **[PATCH]** /api/v1/loan/:id_loan

  Update loan data

- **[DELETE]** /v1/loan/:id_loan

  Delete loan

- **[POST]** /api/v1/loan

  Insert loan

## Related Project

- [`LibraryWeb-Frontend-VueJs`](https://github.com/ichvanul/LibraryWeb-VueJs.git)

## Contact

If you want to contact me you can reach me at <ichvanulyp@gmail.com>.
