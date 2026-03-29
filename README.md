# 🚀 Task Manager App (Full Stack)

A full-stack task management application built as part of the Backend Developer Internship Assignment. This project demonstrates secure, scalable backend design with JWT authentication, role-based access control, and a connected frontend UI.

---

## 🌐 Live Demo

* 🔗 Frontend (Vercel):
  https://task-manager-app-psi-wheat.vercel.app/

* ⚙️ Backend API (Render):
  https://task-manager-app-3kph.onrender.com/

---

## 📌 Assignment Overview

This project fulfills the requirement of building a **Scalable REST API with Authentication & Role-Based Access**, along with a **basic frontend UI** to interact with the APIs.

---

## 🧰 Tech Stack

### Backend

* Django
* Django REST Framework
* JWT Authentication (SimpleJWT)
* PostgreSQL (Render)
* Gunicorn (Production Server)

### Frontend

* React.js
* Axios
* React Router

### Deployment

* Backend: Render
* Frontend: Vercel

---

## 🔐 Features Implemented

### ✅ Authentication

* User Registration API
* User Login API (JWT-based authentication)
* Secure password hashing
* Token-based authentication

### ✅ Role-Based Access

* User roles: `user`, `admin`
* Protected routes using JWT
* Role-based permissions for API access

### ✅ CRUD Operations (Tasks)

* Create Task
* Read Tasks (user-specific)
* Update Task
* Delete Task

---

## 🌐 Frontend Features

* User Registration UI
* Login UI
* Protected Dashboard (JWT required)
* Task Management (CRUD operations)
* Error and success message handling

---

## 🔒 Security Practices

* JWT token-based authentication
* Password hashing using Django's built-in system
* Protected API endpoints
* CORS configuration for secure frontend-backend communication
* Input validation using serializers

---

## 🏗️ Project Structure

task-manager-app/
│
├── backend/
│   ├── users/
│   ├── tasks/
│   ├── backend/
│   └── manage.py
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json

---

## 🔗 API Endpoints

### 🔐 Authentication

* POST /api/auth/register/
* POST /api/auth/login/
* POST /api/auth/refresh/

### 📦 Tasks

* GET /api/tasks/
* POST /api/tasks/
* PUT /api/tasks/{id}/
* DELETE /api/tasks/{id}/

---

## 🧪 API Testing

* Tested using Django REST Framework Browsable API
* Can also be tested using Postman

---

## ⚙️ Setup Instructions (Local)

### 🔷 Backend

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

---

### 🔷 Frontend

cd frontend
npm install
npm start

---

## 🚀 Deployment Details

### Backend (Render)

* Configured using gunicorn
* Environment variables used for security
* PostgreSQL database integration

### Frontend (Vercel)

* Connected to backend via API
* Environment-based API configuration

---

## 📈 Scalability Considerations

* Modular app structure (users, tasks)
* Easily extendable for new modules
* Can be scaled using:

  * Microservices architecture
  * Load balancing
  * Caching (Redis)
  * Containerization (Docker)

---

## 🧠 Key Highlights

* Clean REST API design
* Secure authentication system
* Role-based authorization
* Full-stack integration
* Production deployment

---

## 📬 Submission Checklist

* ✅ Backend APIs implemented
* ✅ Authentication & Role-based access
* ✅ CRUD operations
* ✅ Frontend integration
* ✅ Deployment completed
* ✅ Scalable architecture

---

## 👨‍💻 Author

Krishna Jha

---
