# Simple Node API

This project is a simple NodeJS API built with ExpressJS framework running on a Docker Container.

## Stack

- [NodeJS](https://nodejs.org/en)
- [Docker](https://www.docker.com/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Running

``` bash
# build image
$ docker build -t simple-node-api .

# run container
$ docker run --name simple-node-api -p 3000:3000 -d simple-node-api

# connect to the container
$ docker exec -it simple-node-api /bin/sh
```
