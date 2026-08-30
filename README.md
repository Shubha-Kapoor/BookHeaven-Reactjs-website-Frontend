
# 📚 BookHeaven — Your Digital Bookshelf, Organized

> **A MERN Stack Digital Library & Book Access Management System**

BookHeaven is a modern, aesthetically designed digital library platform that allows users to explore, search, filter, manage, and access books through an interactive web interface.

Originally developed as a React-based frontend project, BookHeaven is now being upgraded into a complete **MERN Stack application** with a RESTful backend and persistent MongoDB database storage.

The project focuses on creating a smooth digital library experience through reusable React components, dynamic themes, real-time search, book management, and database-driven content.

---

## 🌟 Overview

BookHeaven is designed to provide a clean and engaging way to organize and explore a digital book collection.

The application combines a creative user interface with functional library management features. Users can browse books, search by title or author, filter books by category, view detailed information, and add new books to the collection.

The current MERN architecture allows BookHeaven to move from temporary browser-based data toward persistent database storage.

### Application Flow

```text
                ┌───────────────────┐
                │   React Frontend  │
                │   BookHeaven UI   │
                └─────────┬─────────┘
                          │
                    HTTP / REST API
                          │
                          ▼
                ┌───────────────────┐
                │ Express.js Server │
                │   Node.js API     │
                └─────────┬─────────┘
                          │
                       Mongoose
                          │
                          ▼
                ┌───────────────────┐
                │  MongoDB Atlas    │
                │  Books Database   │
                └───────────────────┘
````

---

# ✨ Features

## 📚 Book Management

* Browse a digital collection of books
* View detailed book information
* Add new books to the library
* Remove books from the collection
* Store book information in MongoDB
* Persistent database-driven catalog management

---

## 🔍 Real-Time Search

Users can search dynamically through the book collection using:

* Book title
* Author name

The interface updates the displayed results in real time as the user types.

---

## 🏷️ Category Filtering

Books can be organized and filtered through category selection.

This allows users to quickly explore different genres and collections.

---

## 📖 Book Details

Each book can display detailed information such as:

* Title
* Author
* Category
* Description
* Cover image
* Rating
* Additional publication information

---

## ✍️ Add Book Functionality

BookHeaven includes a controlled form interface for adding books to the collection.

The form supports structured book data entry and is being integrated with the MERN backend so that newly added books can be permanently stored in MongoDB.

---

## 🎨 Dynamic Theme System

BookHeaven includes multiple visual themes powered by CSS custom properties.

Available themes include:

* 🍵 Matcha Latte
* 🩵 Cyan Blue Cute
* 💜 Lavender Milk
* 🧋 Taro Boba
* 🖤 Black Pebble
* 🧋 Classic Milk Tea

The themes dynamically update the application's visual appearance while maintaining the same component structure.

---

## ⚡ Single Page Application Experience

BookHeaven provides a smooth application experience without traditional page reloads.

The frontend uses React component rendering and state-based page switching to move between different application views.

Views include:

* Home
* Books
* Book Details
* Add Book
* Authentication
* Not Found

---

## 💾 Persistent Data Storage

The project is being upgraded from browser-based data persistence to database storage.

Current architecture:

```text
React
   │
   ▼
Express REST API
   │
   ▼
MongoDB Atlas
```

MongoDB is used to store application data such as:

```text
Books
Categories
Users
Future authentication data
```

---

# 🛠️ Tech Stack

## Frontend

| Technology      | Purpose                           |
| --------------- | --------------------------------- |
| React 18        | Building reusable user interfaces |
| Vite 5          | Frontend development environment  |
| JavaScript ES6+ | Application logic                 |
| HTML5           | Application structure             |
| CSS3            | Styling and responsive design     |
| CSS Variables   | Dynamic theme system              |

### React Concepts Used

* Functional Components
* `useState`
* `useEffect`
* Component Props
* Conditional Rendering
* Controlled Forms
* State-Based View Switching

---

## Backend

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | JavaScript runtime              |
| Express.js | Backend API development         |
| Mongoose   | MongoDB object modeling         |
| CORS       | Frontend-backend communication  |
| dotenv     | Environment variable management |
| Nodemon    | Backend development server      |

---

## Database

| Technology      | Purpose                               |
| --------------- | ------------------------------------- |
| MongoDB Atlas   | Cloud-hosted NoSQL database           |
| MongoDB Compass | Database visualization and management |

---

# 📂 Project Structure

```text
book_store_react/
│
├── server/                              # Backend API
│   │
│   ├── config/
│   │   └── db.js                        # MongoDB connection
│   │
│   ├── controllers/                     # Application logic
│   │
│   ├── middleware/                      # Custom middleware
│   │
│   ├── models/
│   │   └── Book.js                      # Book database schema
│   │
│   ├── routes/
│   │   └── bookRoutes.js                # Book API routes
│   │
│   ├── uploads/
│   │   ├── books/                       # Book PDF uploads
│   │   └── covers/                      # Cover image uploads
│   │
│   ├── .env                             # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js                        # Express server entry point
│
│
├── src/                                 # React frontend
│   │
│   ├── assets/                          # Images and static assets
│   │
│   ├── components/                      # Reusable UI components
│   │   │
│   │   ├── BookCard/
│   │   │   ├── BookCard.jsx
│   │   │   └── BookCard.css
│   │   │
│   │   ├── CategoryFilter/
│   │   │   ├── CategoryFilter.jsx
│   │   │   └── CategoryFilter.css
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   └── SearchBar/
│   │       ├── SearchBar.jsx
│   │       └── SearchBar.css
│   │
│   ├── data/
│   │   └── Books.js                     # Initial frontend book data
│   │
│   ├── pages/
│   │   │
│   │   ├── AddBook/
│   │   │   ├── AddBook.jsx
│   │   │   └── AddBook.css
│   │   │
│   │   ├── Auth/
│   │   │   ├── Auth.jsx
│   │   │   └── Auth.css
│   │   │
│   │   ├── BookDetails/
│   │   │   ├── BookDetails.jsx
│   │   │   └── BookDetails.css
│   │   │
│   │   ├── Books/
│   │   │   ├── Books.jsx
│   │   │   └── Books.css
│   │   │
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   │
│   │   └── NotFound/
│   │       ├── NotFound.jsx
│   │       └── NotFound.css
│   │
│   ├── services/
│   │   └── api.js                       # API communication layer
│   │
│   ├── App.css                          # Global application styles
│   ├── App.jsx                          # Main application state
│   ├── index.css                        # Base styles
│   └── main.jsx                         # React entry point
│
├── public/
│
├── .gitignore
├── index.html
├── package.json                         # Frontend dependencies
└── vite.config.js
```

---

# 🗄️ Database Architecture

The Book model stores information about each book in MongoDB.

Example document:

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "category": "Self Help",
  "description": "A practical guide to building better habits.",
  "coverImage": "image-url",
  "rating": 4.8,
  "createdAt": "2026-08-30"
}
```

MongoDB automatically generates a unique document ID:

```text
_id
```

which can be used by the application to:

* Fetch a specific book
* Update a book
* Delete a book
* Display detailed information

---

# 📡 REST API

## API Base URL

```text
http://localhost:5000
```

### Health Check

```text
GET /
```

Response:

```json
{
  "message": "Welcome to BookHeaven API!",
  "status": "Server and MongoDB are running successfully"
}
```

---

## Books API

| Method   | Endpoint         | Description       |
| -------- | ---------------- | ----------------- |
| `GET`    | `/api/books`     | Fetch all books   |
| `GET`    | `/api/books/:id` | Fetch one book    |
| `POST`   | `/api/books`     | Create a new book |
| `PUT`    | `/api/books/:id` | Update a book     |
| `DELETE` | `/api/books/:id` | Delete a book     |

---

# 🚀 Getting Started

## Prerequisites

Before running the project, install:

* Node.js v18 or later
* npm
* MongoDB Atlas account or local MongoDB
* MongoDB Compass *(optional but recommended)*

---

# 1️⃣ Clone the Repository

```bash
git clone https://github.com/Shubha-Kapoor/book_store_react.git
cd book_store_react
```

---

# 2️⃣ Install Frontend Dependencies

From the project root:

```bash
npm install
```

---

# 3️⃣ Configure the Backend

Navigate to the backend folder:

```bash
cd server
```

Install backend dependencies:

```bash
npm install
```

---

# 4️⃣ Create Environment Variables

Create:

```text
server/.env
```

Add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Example structure:

```text
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/bookheaven
```

> ⚠️ Never upload your `.env` file to GitHub.

Make sure `.env` is included in:

```text
server/.gitignore
```

Example:

```gitignore
node_modules
.env
```

---

# 5️⃣ Start the Backend

Inside the `server` directory:

```bash
npm run dev
```

The terminal should display something similar to:

```text
MongoDB connected successfully: cluster.mongodb.net
Server is running on port 5000
```

---

# 6️⃣ Start the Frontend

Open another terminal and return to the project root:

```bash
cd ..
```

Then run:

```bash
npm run dev
```

The frontend will typically run at:

```text
http://localhost:5173
```

---

# 🔄 Development Workflow

During development, BookHeaven runs two separate applications.

### Terminal 1

```text
Frontend
```

```bash
npm run dev
```

### Terminal 2

```text
Backend
```

```bash
cd server
npm run dev
```

Architecture:

```text
Browser
   │
   ▼
React + Vite
localhost:5173
   │
   ▼
Express API
localhost:5000
   │
   ▼
MongoDB Atlas
```

---

# 🎨 Theme System

The interface is powered by CSS custom properties.

Example:

```css
:root {
  --primary-color: #8b5cf6;
  --secondary-color: #f5f3ff;
  --background-color: #ffffff;
  --text-color: #2d2d2d;
}
```

When the user changes themes, the application updates its CSS variables to create a different visual identity without rebuilding every component.

---

# 🧩 Current Project Architecture

BookHeaven is transitioning from:

```text
React
  │
  ├── Static Book Data
  │
  └── localStorage
```

to:

```text
React Frontend
      │
      ▼
Express REST API
      │
      ▼
MongoDB Atlas
```

This migration allows book information to become persistent and database-driven.

---

# 🔮 Future Scope

The following features are planned for the next stages of BookHeaven:

* 🔐 JWT-based user authentication
* 👤 User registration and login
* 🛡️ Role-based authorization
* 👩‍💼 Admin dashboard
* 📖 PDF book access
* 📤 PDF upload functionality
* 🖼️ Book cover image upload
* ☁️ Cloud storage integration
* 📚 Personal user bookshelves
* ❤️ Favourite books
* 📖 Reading history
* 🔄 Full CRUD book management
* 🌐 Production deployment

---

# 👩‍💻 Author

**Shubha Kapoor**

* 🎓 BCA Student
* 💻 React & MERN Stack Developer
* 🎨 UI/UX and Creative Frontend Development Enthusiast

### Connect with me

* GitHub: [Shubha Kapoor's GitHub](https://github.com/Shubha-Kapoor?utm_source=chatgpt.com)
* LinkedIn: [Shubha Kapoor's LinkedIn](https://www.linkedin.com/in/shubha-kapoor-a3963a308?utm_source=chatgpt.com)

---

# 📄 License

This project is created for educational and learning purposes.

---
