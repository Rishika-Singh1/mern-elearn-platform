# E-Learn: MERN Stack E-Learning Platform

A full-stack e-learning platform built using the MERN stack (MongoDB, Express, React, Node.js) with a Vite-powered React frontend.

## Features

- **User Authentication:** Secure signup and login using JWT (JSON Web Tokens) and bcryptjs.
- **Course Management:** View available courses and their details.
- **User Profiles:** Authenticated users can manage their profiles.
- **Feedback System:** Users can submit feedback, which is stored in the database.
- **Interactive Chatbot:** A built-in chatbot for assisting learning and providing quick answers.
- **Responsive Design:** A polished UI with intuitive navigation and protected routes.

## Tech Stack

### Frontend (`elearnFrontend/`)
- **Framework:** React 19 + Vite
- **Routing:** React Router DOM
- **State Management:** React hooks + LocalStorage
- **Styling:** Custom CSS
- **Linting:** ESLint

### Backend (`elearnBackend/`)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (using Mongoose)
- **Authentication:** jsonwebtoken (JWT), bcryptjs
- **Other Utilities:** CORS, dotenv

## Project Structure

```text
finalProject/
├── elearnBackend/       # Express server & MongoDB API
│   ├── models/          # Mongoose schemas (User, Feedback)
│   ├── routes/          # Express API routes (auth, user, feedback)
│   ├── index.js         # Entry point for backend
│   └── .env             # Environment variables
└── elearnFrontend/      # Vite + React app
    ├── src/             
    │   ├── components/  # Reusable UI components (Navbar, Chatbot, etc.)
    │   ├── pages/       # Application views (Home, Courses, Profile)
    │   └── App.jsx      # Main layout & Routing
    └── package.json     
```

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (MongoDB Atlas)

### Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd elearnBackend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Make sure an `.env` file exists with:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```
4. Start the server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`.

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd elearnFrontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be accessible at the Local URL provided by Vite (usually `http://localhost:5173`).

## Available Scripts

### In the `elearnFrontend` directory:
- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the app for production.
- `npm run lint` - Runs ESLint code verification.

### In the `elearnBackend` directory:
- `npm start` - Starts the Express API server.
