# Blog Platform API

Backend API for a blogging platform built with Node.js, Express, and MongoDB.

## Features
- User Authentication (JWT)
- CRUD Operations for Blog Posts
- User Authorization
- Password Hashing with bcrypt
- MongoDB Database

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt

## API Endpoints

### Auth Routes
- POST `/api/auth/signup` - Register new user
- POST `/api/auth/login` - Login user

### Post Routes
- POST `/api/posts` - Create post (Protected)
- GET `/api/posts` - Get all posts
- GET `/api/posts/:id` - Get single post
- PUT `/api/posts/:id` - Update post (Protected)
- DELETE `/api/posts/:id` - Delete post (Protected)

## Installation

1. Clone repository
2. Run `npm install`
3. Create `.env` file with:
   - PORT=5000
   - MONGODB_URI=your_mongodb_uri
   - JWT_SECRET=your_secret_key
4. Run `npm run dev`

## Author
Khizra Iqbal
