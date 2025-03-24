# task_Repo
# Task Manager Application

## Project Overview
A comprehensive Task Management application built to help users organize, track, and manage their tasks efficiently.
![image](https://github.com/user-attachments/assets/1d00ce81-5318-4839-a5eb-bb91b0b804c5)


## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Frontend Routes](#frontend-routes)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features
- User Authentication (Register/Login)
- Create, Read, Update, Delete (CRUD) Tasks
- Task Categorization
- Priority and Status Tracking
- User-specific Task Management
- Responsive Design

## Tech Stack
### Frontend
- React.js
- Redux (State Management)
- Tailwind CSS
- Axios (HTTP Requests)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Additional Tools
- Postman (API Testing)
- Git (Version Control)
- Vercel/Netlify (Deployment)

## Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0 or later)

## Installation

### Clone the Repository
```bash
git clone https://github.com/Harshvardhan2910/task_Repo.git
cd task_Repo
```

### Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup
```bash
cd frontend
npm install
```

## Running the Application

### Backend
```bash
cd backend
npm start # or npm run dev
```

### Frontend
```bash
cd frontend
npm start
```

## Project Structure
```
task_Repo/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User Registration
- `POST /api/auth/login` - User Login

### Tasks
- `GET /api/tasks` - List All Tasks
- `POST /api/tasks` - Create New Task
- `GET /api/tasks/:id` - Get Specific Task
- `PUT /api/tasks/:id` - Update Task
- `DELETE /api/tasks/:id` - Delete Task

## Frontend Routes
- `/` - Home/Dashboard
- `/login` - Login Page
- `/register` - Registration Page
- `/tasks` - Task List
- `/tasks/create` - Create New Task
- `/tasks/edit/:id` - Edit Existing Task

## Environment Variables
Create `.env` files in both backend and frontend:

### Backend `.env`
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### Frontend `.env`
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Your Name - [Your Email]
Project Link: [https://github.com/Harshvardhan2910/task_Repo](https://github.com/Harshvardhan2910/task_Repo)
