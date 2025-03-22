> [!IMPORTANT]  
> Project is deployed [here](https://magiclog-technical-test-bk.onrender.com)
> 
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# MagicLog Technical Test Backend

This is a backend application built with NestJS framework, designed to demonstrate technical capabilities and best practices in building scalable server-side applications.

## Project Overview

This project serves as a technical test implementation, showcasing:
- Clean Architecture principles
- Domain-Driven Design (DDD) patterns
- RESTful API design
- Database integration
- Authentication and authorization
- Docker containerization

## Prerequisites

- Node.js (v18 or higher)
- PNPM package manager
- Docker and Docker Compose (for containerized development)
- PostgreSQL (if running locally)

## Installation

1. Clone the repository
```bash
$ git clone https://github.com/yxd99/magiclog-technical-test-bk.git
```
2. Install dependencies:
```bash
$ pnpm install
```

## Environment Setup

1. Copy the example environment file:
```bash
$ cp .env.example .env
```

2. Update the environment variables in `.env` with your configuration

## Running the Application

### Local Development

```bash
# development mode
$ pnpm run start

# watch mode with hot-reload
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### Using Docker

```bash
# build and start containers
$ docker compose up -d

# view logs
$ docker compose logs -f

# stop containers
$ docker compose down
```

### Database Migrations

```bash
# run migrations
$ pnpm run migration:run

# create a new migration
$ pnpm run migration:create

# generate a migration from entity changes
$ pnpm run migration:generate
```

When using Docker:
```bash
$ docker compose exec api pnpm run migration:run
```

## Testing

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Project Structure

```
src/
├── application/     # Application layer (use cases, DTOs)
├── domain/          # Domain layer (entities, repositories interfaces)
├── infrastructure/  # Infrastructure layer (implementations)
└── main.ts         # Application entry point
```

## API Documentation

Once the application is running, you can access the Swagger API documentation at:
- Local: http://localhost:3000/api
- Development: http://localhost:3000/api-dev
