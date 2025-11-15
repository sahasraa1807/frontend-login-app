## User Dashboard Mini App ##
A responsive full-stack MERN application built for the Foundracy Education Front-End Development Internship assessment. It features a complete user authentication system (register and login) and a protected dashboard that displays user data after a successful login.

# 🚀 Live Demo
Frontend (Vercel): https://frontend-login-app2.vercel.app

Backend (Render): https://frontend-login-app-new-2.onrender.com


## Features
User Registration: A secure registration page for new users (Name, Email, Password).

User Login: A login page that validates user credentials.

Secure Authentication: Uses JSON Web Tokens (JWT) for secure, stateless authentication.

Password Hashing: Passwords are never stored as plain text. They are hashed using bcryptjs before being saved to the database.

Protected Routes: The /dashboard route is protected. It can only be accessed by a logged-in user with a valid token.

Dynamic Data: The dashboard fetches and displays dynamic data from the backend API.

Error Handling: Displays clear error messages for invalid login, failed registration, or other errors.

Full-Stack Deployment: The frontend is deployed on Vercel and the backend on Render, configured to work together.



## Category,Technology
Frontend : React.js (JSX, JavaScript), React Router, CSS, Vite

Backend: Node.js, Express.js (JavaScript)

Database: MongoDB (with Mongoose)

Authentication: JSON Web Tokens (JWT), bcryptjs

Deployment: Vercel (Frontend), Render (Backend)
