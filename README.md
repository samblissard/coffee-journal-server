# Coffee Journal (Server)
A web application that lets you log thoughts about coffee and all the fun variables related to it

## Built With
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)

## Installation
Create `.env` file in the root directory:

```
SERVER_PORT={SERVER_PORT}
# Postgres configuration
DB_PASSWORD={DB_PASSWORD}
DB_USERNAME={DB_USERNAME}
DB_DATABASE_NAME={DB_DATABASE_NAME}
DB_PORT=5432
```

The Postgres configuration can be replaced with a local instance's parameters or customized for a Docker container.

### Docker
```bash
$ docker-compose up
```

### Local
```bash
$ npm install
$ npm run start:dev
```
### Swagger
After starting the application, the Swagger API documentation will be available at `http://localhost:3000/api/`.

## Testing
### Running unit tests

```bash
$ npm run test
```

### Running end-to-end tests
```bash
$ npm run test:e2e
```
