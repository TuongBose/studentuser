# Student User Backend

This repository contains a Node.js + Express backend for managing students and users. The project is organized in layers so each responsibility is isolated: routes define endpoints, controllers handle requests, repositories interact with MongoDB, and models define the database schema.

## Project overview

The backend currently provides:
- User authentication routes for login and registration
- Student CRUD operations
- JWT-based request authentication
- MongoDB connectivity through Mongoose

## Code structure

The main backend project lives in the studentuser-backend folder.

```text
studentuser-backend/
├── authentication/      # JWT authentication middleware
├── controllers/         # Request handlers for routes
├── database/            # Database connection setup
├── exceptions/          # Custom exception classes and status codes
├── Global/              # Shared constants
├── helpers/             # Utility helpers
├── models/              # Mongoose schemas and models
├── repositories/        # Data access layer and business logic
├── routes/              # Express route definitions
├── server.js            # Application entry point
├── package.json         # Scripts and dependencies
└── .env                 # Environment variables
```

### Main responsibilities
- server.js: starts the Express app, registers middleware, and connects to MongoDB
- routes/: exposes HTTP endpoints such as /users and /students
- controllers/: formats requests and returns responses
- repositories/: performs database operations and validation logic
- models/: defines the schema for Student and User documents
- authentication/: protects routes with JWT verification

## Prerequisites

Before running the project, make sure you have:
- Node.js 18 or newer
- npm
- A MongoDB connection string (local MongoDB or MongoDB Atlas)

## How to run

1. Open the backend folder:
   ```bash
   cd studentuser-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create or update the environment file:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   SALT_ROUNDS=10
   JWT_SECRET=your_secret_key
   ```

4. Start the server:
   ```bash
   npm start
   ```

   This uses nodemon and will restart automatically when files change.

5. For debugging:
   ```bash
   npm run debug
   ```

## API overview

### User routes
- POST /users/register
- POST /users/login
- GET /users/:id

### Student routes
- GET /students
- GET /students/:id
- POST /students
- PATCH /students
- DELETE /students/:id
- POST /students/generateFakeStudents

## Code conventions

To keep the project consistent, follow these conventions:
- Use ES modules with import/export syntax.
- Keep the layer separation intact: routes -> controllers -> repositories -> models.
- Use camelCase for variables, functions, and files.
- Use PascalCase for model and class names.
- Prefer async/await for database and network operations.
- Keep business logic inside repositories when possible.
- Handle errors clearly and return meaningful JSON responses.
- Reuse shared values from the Global/constants.js file instead of hardcoding magic numbers.
- Name new features by their responsibility, for example: studentController, studentRepository, or Student model.

## Development tips

When adding a new feature:
1. Create or update the route in the routes folder.
2. Add the handler in the controllers folder.
3. Put database logic in the repositories folder.
4. Define or update the related model if MongoDB storage is required.
5. Keep the API response structure predictable and easy to consume.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Notes

The project currently depends on environment variables from the .env file, so do not commit sensitive values such as JWT secrets or real MongoDB credentials to source control.
