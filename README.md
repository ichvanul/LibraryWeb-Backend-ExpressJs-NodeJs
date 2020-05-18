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

- Please make sure that you have : node.js installed ([https://nodejs.org/](https://nodejs.org/))
- Download or clone this file and then config & import MySQL database.
- You can use [POSTMAN](https://www.getpostman.com/) or anything else for simulate.

## API Versioning

The first part of the URI path specifies the API version you wish to access in the format `v{version_number}`.

For example, version 1 of the API (most current) is accessible via:

```
https://localhost:1000/api/v1/
```

## List of Endpoints

**USERS**

- [GET] /api/v1/users
  Get all users

- [GET] /api/v1/users/:id_user
  Get user detail

- [PATCH] /api/v1/users/:id_user
  Update user data

- [DELETE] /v1/users/:id_user
  Delete user

- [POST] /api/v1/users/register
  Register user

- [POST] /api/v1/users/login {email, password}
  Login user

- [POST] /api/v1/users/logout
  Logout user

**CATEGORY**

- [GET] /api/v1/category
  Get all categories

- [GET] /api/v1/category/:id_category
  Get category detail

- [PATCH] /api/v1/category/:id_category {name}
  Update category data

- [DELETE] /v1/category/:id_category
  Delete category

- [POST] /api/v1/category {name}
  Insert category

**BOOK**

- [GET] /api/v1/book
  Get all book

- [GET] /api/v1/book/:id_book
  Get book detail

- [PATCH] /api/v1/book/:id_book
  Update book data

- [DELETE] /v1/book/:id_book
  Delete book

- [POST] /api/v1/book
  Insert book

**LOAN**

- [GET] /api/v1/loan
  Get all loan

- [GET] /api/v1/loan/:id_loan
  Get loan detail

- [PATCH] /api/v1/loan/:id_loan
  Update loan data

- [DELETE] /v1/loan/:id_loan
  Delete loan

- [POST] /api/v1/loan
  Insert loan
