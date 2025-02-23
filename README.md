# Full Stack Developer Assignment - Backend

This repository contains the backend implementation for the Full Stack Developer Assignment. The backend is built with [NestJS](https://nestjs.com/), uses [Prisma ORM](https://www.prisma.io/) to interact with a PostgreSQL database, and implements JWT-based authentication.

## Features

- **User Authentication API**
  - **Register** (`POST /auth/register`): Register a new user with the fields _fullName_, _email_, _category_, _contact_, and _password_.
  - **Login** (`POST /auth/login`): Authenticate an existing user and return a JWT token.
  - **Profile** (`GET /auth/me`): Fetch the authenticated user’s details (protected route).
- **Validation**
  - Uses Data Transfer Objects (DTOs) with [class-validator](https://github.com/typestack/class-validator) for request validation.
- **API Documentation**
  - Swagger documentation is available for easy testing and integration.
- **Security**
  - JWT-based authentication for protecting endpoints.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **PostgreSQL** installed locally

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mitkapadiya23/auth-backend.git
   cd auth-backend
   ```
