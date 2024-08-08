# Getting Started with a to-do list backend

This backend is aim to allow the user to read, create, delete and update a to-do list.
This project must be run with PostgreSQL. For the database config, please check ./src/db.ts

Docker composed project on github. 
https://github.com/TimmyChu1990/ToDoListDockerCompose

# Initialise to do:
In the project directory, run below script to install node modules:
### `npm install`
After library installation done, run below script to compile TypeScript to JavaScript:
### `tsc`
Finally, run the project:
### `node ./src/app.js`

To test the project, delete ./src/app.test.js, keep the project running and run:
### `npm test`


Please run a container on Docker for PostgreQSL.
### `docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=example -d postgres`