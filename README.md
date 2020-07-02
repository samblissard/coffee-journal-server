## Setup

Create `.env` file in the root directory:

```
SERVER_PORT={SERVER_PORT}
# Postgres configuration
DB_PASSWORD={DB_PASSWORD}
DB_USERNAME={DB_USERNAME}
DB_DATABASE_NAME={DB_DATABASE_NAME}
DB_PORT=5432
```

The Postgres configuration can be replaced with a local instance's parameters or customized for Docker.

## Running the app

### Docker

```bash
docker-compose up
```

### Local

```bash
$ npm install
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
