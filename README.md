# 🚀 KariGo — Service Marketplace App

## 📌 Project Overview

KariGo is a full-stack **real-time service marketplace application** where users can find, book, and pay for services like electricians, plumbers, etc.

This app is designed as a **real product (not just a college project)** with:

* Real-time updates
* Online payments
* Location-based services
* Role-based system (User / Worker / Admin)

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express (ES Modules)
* PostgreSQL
* JWT Authentication
* Socket.io (planned)

### External Services (Planned)

* Razorpay (Payments)
* Google Maps / Mapbox (Location)

---

## 📁 Project Structure

### Backend (`back-end/`)

```
back-end/
  controllers/
    authController.js
    workerController.js
    workerApplicationController.js
  routes/
    authRoutes.js
    userRoutes.js
    workerRoutes.js
    workerApplicationRoutes.js
  middleware/
    authMiddleware.js
    roleMiddleware.js
  utils/
  sockets/
  db.js
  server.js
```

### Frontend (`front-end/`)

```
front-end/
  src/
    components/
      layout/
      common/
      workers/
    pages/
      Home.jsx
      FindWorkers.jsx
      WorkerProfile.jsx
      Login.jsx
    api/
      axios.js
    context/
      AuthContext.jsx
    hooks/
    utils/
```

---

## 🧩 User Roles

### 👤 User (Customer)

* Search workers
* View profiles
* Book services
* Make payments
* View booking history
* Apply as worker

### 🧑‍🔧 Worker

* Apply for approval
* Accept/reject bookings
* Manage availability
* View earnings

### 🛠️ Admin

* Approve/reject worker applications
* Manage users
* Monitor bookings & payments

---

## 🗄️ Database Design

### ✅ Completed Tables

* users
* workers
* worker_applications

### 🔜 Upcoming Tables

* bookings
* reviews
* payments

---

## 🔄 Core Features

### ✅ Completed

#### 🔐 Authentication System

* Register
* Login
* Password hashing (bcrypt)
* JWT token

#### 🛡️ Security

* Auth Middleware (Protected routes)
* Role-Based Access Control

#### 🧑‍🔧 Workers System

* Workers table
* Get all workers API
* Get worker by ID API
* Create worker (Admin only)

#### 📩 Worker Application System

* Apply as worker
* Admin can:

  * View applications
  * Approve → becomes worker
  * Reject application

#### 🌐 Frontend Setup & Integration

* React (Vite) setup
* Tailwind CSS configured
* React Router setup
* Axios instance for API calls
* Worker listing page (connected to backend)

---

### 🔜 Upcoming Features

#### 📅 Booking System (NEXT)

* Book worker
* Select date/time
* Booking lifecycle

#### 💳 Payment System

* Razorpay integration
* Payment verification

#### ⚡ Real-Time Features

* Notifications (Socket.io)

#### 🗺️ Location System

* Map integration
* Distance-based search

#### 📊 Dashboards

* User dashboard
* Worker dashboard
* Admin dashboard

---

## 🔁 Application Flow

User → Search Workers → View Profile → Book → Pay → Track Status

Worker → Apply → Get Approved → Accept Jobs

Admin → Review Applications → Manage Platform

---

## 📈 Development Roadmap

### Phase 1: Foundation ✅

* Backend setup
* DB connection

### Phase 2: Authentication & Security ✅

* Register/Login
* JWT
* Auth middleware
* Role-based access

### Phase 3: Workers System ✅

* Worker APIs
* Worker Application system

### Phase 4: Frontend Integration ✅ (IN PROGRESS)

* Worker listing UI
* API integration

### Phase 5: Booking System

### Phase 6: Payments

### Phase 7: Real-Time + Maps

### Phase 8: Dashboards + Polish

---

## 🚀 Current Status

👉 Backend core APIs completed
👉 Worker system + application flow completed
👉 Frontend setup completed
👉 First UI (Worker listing) connected to backend

---

## 🧠 Developer Notes

* Focus on understanding, not just building
* Follow clean architecture
* Always test APIs using Postman
* Debug errors properly (don’t ignore them)
* Think like building a real product, not just a project

---
