## Welcome to Catalog Service (Library Management System)

### Project Setup

-   Clone the project on your local
-   Execute npm install on the same path as fo your root directory of the downloaded project
-   Create a .env file in the root directory and add the following environment variable PORT=3000
-   Inside the src/config folder create a new file config.json and then add the following piece of json.

```
    {
        "development": {
            "username": "<YOUR_DB_LOGIN_NAME>",
            "password": "<YOUR_DB_PASSWORD>",
            "database": "Flight_Search_DB",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }

```

- Once you've added your db config as listed above, go to your src folder from your terminal and execute the command npx sequelize db:create 

- Execute npx sequelize db:migrate

## DB Design 

### Entities

- Book
- BookMetaData

### Relationship

- A Book can have one BookMetaData and vice-verse

## Tables/Entities explained

### Book
- BookID: Unique identifier
- Title: Title of the book
- Author: Author name
- Category: Book category/genre
- PublishedDate: Date of publication
- Version: Book version (for new editions)
- ISBN: International Standard Book Number
- AvailableCopies: Number of available copies
- TotalCopies: Total number of copies in the library
- Status: Active, Deleted, etc.

### BookMetaData
- MetadataID: Unique identifier
- BookID: Foreign key to Books table
- Language: Book language
- Pages: Number of pages
- Publisher: Publisher name
- Summary: A short description or summary of the book

