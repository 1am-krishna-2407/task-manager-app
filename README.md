# 🚀 Task Manager App 

A production-ready full-stack task management system built using **Django REST Framework** and **React**, featuring JWT authentication, role-based access control, and scalable architecture.

---

## 🌐 Live Application

* 🔗 **Frontend (Vercel)**
  https://task-manager-app-psi-wheat.vercel.app/

* ⚙️ **Backend API (Render)**
  https://task-manager-app-3kph.onrender.com/

---

## 📌 Project Overview

This project was developed as part of a Backend Developer assignment to demonstrate:

* Secure REST API development
* Authentication & authorization
* Full-stack integration
* Deployment readiness

---

## 🧰 Tech Stack

### 🔙 Backend

* Django
* Django REST Framework
* JWT Authentication (SimpleJWT)
* PostgreSQL (Render)
* Gunicorn

### 🎨 Frontend

* React.js
* Axios
* React Router

### ☁️ Deployment

* Backend → Render
* Frontend → Vercel

---

## 🔐 Core Features

### Authentication

* User registration
* Secure login with JWT
* Password hashing

### Authorization

* Role-based access (`user`, `admin`)
* Protected endpoints

### Task Management

* Create tasks
* View user-specific tasks
* Update tasks
* Delete tasks

---

## 🖥️ Frontend Capabilities

* Register & login UI
* JWT-based protected dashboard
* Task CRUD interface
* API-driven error & success handling

---

## 🔗 API Endpoints

### Auth

POST /api/auth/register/
POST /api/auth/login/
POST /api/auth/refresh/

### Tasks

GET /api/tasks/
POST /api/tasks/
PUT /api/tasks/{id}/
DELETE /api/tasks/{id}/

---

## 🏗️ Project Structure

```
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
```

---

## ⚙️ Local Setup

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🔒 Security Implementation

* JWT authentication
* Hashed passwords
* Protected routes
* Input validation
* CORS configuration

---

## 📈 Scalability Considerations

* Modular architecture (users, tasks)
* Easily extensible for new services
* Ready for:

  * Microservices
  * Caching (Redis)
  * Load balancing
  * Dockerization

---

## 🎯 Highlights

* Clean REST API design
* Full-stack integration
* Production deployment
* Secure authentication system

---

## 👨‍💻 Author

**Krishna Jha**

---
