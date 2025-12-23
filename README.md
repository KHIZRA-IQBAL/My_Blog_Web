# Blog Platform API

A complete RESTful backend API for a blogging platform with user authentication and authorization.

## 🚀 Features

- User Registration & Login with JWT Authentication
- Create, Read, Update, Delete Blog Posts
- User Authorization (only author can edit/delete their posts)
- Password encryption using bcrypt
- MongoDB database with Mongoose ODM
- RESTful API design
- MVC Architecture

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT (JSON Web Tokens)
- **Password Security:** bcrypt
- **Tools:** Postman (API Testing), Git & GitHub

## 📋 API Endpoints

### Authentication Routes
```
POST /api/auth/signup    - Register new user
POST /api/auth/login     - Login user (returns JWT token)
```

### Blog Post Routes
```
GET    /api/posts        - Get all posts (public)
GET    /api/posts/:id    - Get single post (public)
POST   /api/posts        - Create new post (protected - requires token)
PUT    /api/posts/:id    - Update post (protected - only author)
DELETE /api/posts/:id    - Delete post (protected - only author)
```

## 🔧 Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/KHIZRA-IQBAL/blog-platform-api.git
cd blog-platform-api
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file in root directory
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Run the application
```bash
npm run dev
```

Server will start on `http://localhost:5000`

## 📁 Project Structure
```
blog-platform-api/
├── controllers/
│   ├── authController.js
│   └── postController.js
├── models/
│   ├── User.js
│   └── Post.js
├── routes/
│   ├── authRoutes.js
│   └── postRoutes.js
├── middleware/
│   └── auth.js
├── db/
│   └── connection.js
├── .env
├── .gitignore
├── server.js
└── package.json
```

## 🔐 Authentication Flow

1. User registers with username, email, and password
2. Password is hashed using bcrypt before storing in database
3. User logs in with email and password
4. JWT token is generated and returned to user
5. User includes token in Authorization header for protected routes
6. Middleware verifies token and extracts user ID
7. User can perform authorized actions

## 💡 Key Implementation Details

- **MVC Architecture:** Separation of concerns with Models, Controllers, and Routes
- **JWT Authentication:** Stateless authentication using JSON Web Tokens
- **Password Security:** Passwords are hashed using bcrypt (salt rounds: 10)
- **Authorization:** Posts can only be edited/deleted by their authors
- **Error Handling:** Comprehensive try-catch blocks with appropriate HTTP status codes
- **Database Relationships:** Posts reference Users through ObjectId

## 🧪 Testing with Postman

### 1. Register a new user
**POST** `http://localhost:5000/api/auth/signup`

**Body (JSON):**
```json
{
  "username": "khizra",
  "email": "khizra@test.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "khizra",
    "email": "khizra@test.com"
  }
}
```

---

### 2. Login
**POST** `http://localhost:5000/api/auth/login`

**Body (JSON):**
```json
{
  "email": "khizra@test.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "khizra",
    "email": "khizra@test.com"
  }
}
```

**⚠️ Copy the token for next steps!**

---

### 3. Create a blog post (Protected Route)
**POST** `http://localhost:5000/api/posts`

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Body (JSON):**
```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my amazing blog post about backend development...",
  "category": "Technology"
}
```

**Response:**
```json
{
  "success": true,
  "post": {
    "_id": "507f1f77bcf86cd799439012",
    "title": "My First Blog Post",
    "content": "This is the content of my amazing blog post...",
    "category": "Technology",
    "author": "507f1f77bcf86cd799439011",
    "createdAt": "2024-12-22T10:30:00.000Z",
    "updatedAt": "2024-12-22T10:30:00.000Z"
  }
}
```

---

### 4. Get all posts (Public)
**GET** `http://localhost:5000/api/posts`

**Response:**
```json
{
  "success": true,
  "posts": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "title": "My First Blog Post",
      "content": "This is the content...",
      "category": "Technology",
      "author": {
        "_id": "507f1f77bcf86cd799439011",
        "username": "khizra",
        "email": "khizra@test.com"
      },
      "createdAt": "2024-12-22T10:30:00.000Z",
      "updatedAt": "2024-12-22T10:30:00.000Z"
    }
  ]
}
```

---

### 5. Update a post (Protected - Only Author)
**PUT** `http://localhost:5000/api/posts/507f1f77bcf86cd799439012`

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Body (JSON):**
```json
{
  "title": "Updated Blog Title",
  "content": "Updated content here...",
  "category": "Tech"
}
```

---

### 6. Delete a post (Protected - Only Author)
**DELETE** `http://localhost:5000/api/posts/507f1f77bcf86cd799439012`

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**
```json
{
  "success": true,
  "message": "Post deleted successfully"
}
```

## 🎓 Learning Outcomes

Through this project, I gained practical experience in:
- Building RESTful APIs from scratch
- Implementing secure authentication with JWT
- Database design and relationships
- Password hashing and security best practices
- MVC architecture pattern
- Error handling and validation
- API testing with Postman

## 🚀 Future Enhancements

- [ ] Add comments functionality
- [ ] Implement post likes/reactions
- [ ] Add pagination for posts
- [ ] Image upload for blog posts
- [ ] Search and filter functionality
- [ ] Deploy to cloud platform (AWS/Heroku)

## 📝 License

This project is open source and available for educational purposes.

---

**⭐ If you found this project helpful, please give it a star!**

**Note:** This is a backend-only project. Frontend integration can be done with React, Next.js, or any other frontend framework.
```

---

## **3️⃣ .gitignore FILE**
```
node_modules
.env
.DS_Store
*.log
```

---

### **Repository Description:**
```
RESTful Blog Platform API with JWT Authentication, CRUD operations, MongoDB database, and MVC architecture. Built with Node.js and Express.js
```



