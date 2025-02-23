# Full Stack Developer Assignment - Backend

This repository contains the backend implementation for the Full Stack Developer Assignment. The backend is built using [NestJS](https://nestjs.com/), [Prisma ORM](https://www.prisma.io/), and PostgreSQL. It provides a secure authentication API with endpoints for user registration, login, and fetching authenticated user details.

## Features

- **Authentication API:**
  - `POST /auth/register`: Register a new user.
  - `POST /auth/login`: Authenticate and return a JWT token.
  - `GET /auth/me`: Retrieve user details (protected route).
- **Data Validation:**
  - Utilizes DTOs with [class-validator](https://github.com/typestack/class-validator) for request validation.
- **Database:**
  - PostgreSQL as the database.
  - Prisma ORM for database access and migrations.
- **Security:**
  - JWT-based authentication to secure protected routes.
- **Documentation:**
  - API documentation available via Swagger.

## Prerequisites

- **Node.js** (v14 or above)
- **npm** or **yarn**
- **PostgreSQL** installed locally

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mitkapadiya23/auth-backend.git
cd auth-backend
```
