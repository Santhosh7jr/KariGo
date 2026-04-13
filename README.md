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
  routes/
    authRoutes.js
    userRoutes.js
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
src/
  components/
    layout/
    common/
    workers/
    booking/
  pages/
    Home.jsx
    Services.jsx
    FindWorkers.jsx
    WorkerProfile.jsx
    Booking.jsx
    Login.jsx
    UserDashboard.jsx
    WorkerDashboard.jsx
    Admin.jsx
  context/
  api/
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

### 🧑‍🔧 Worker

* Apply for approval
* Accept/reject bookings
* Manage availability
* View earnings

### 🛠️ Admin

* Approve/reject workers
* Manage users
* Monitor bookings & payments

---

## 🗄️ Database Design (Planned)

* users
* workers
* worker_applications
* bookings
* reviews
* payments

---

## 🔄 Core Features

### ✅ Completed

* Backend setup (Express + ES Modules)
* PostgreSQL connection
* Authentication system:

  * Register
  * Login
  * Password hashing (bcrypt)
  * JWT token
* 🔐 Auth Middleware:

  * Protected routes
  * Token verification
* 🛡️ Role-Based Access Control:

  * Admin-only routes
  * Secure API access

---

### 🔜 Upcoming Features

#### 🧑‍🔧 Workers System (NEXT)

* Worker listing
* Worker profile page
* Worker application system

#### 📅 Booking System

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

User → Search → Select Worker → View Profile → Book → Pay → Track Status

---

## 🎯 Final Goal

Build a **production-level application** with:

* Scalable architecture
* Clean code structure
* Real-world features
* Secure backend + frontend integration

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

### Phase 3: Workers System (NEXT)

* Worker APIs
* Worker UI

### Phase 4: Booking System

### Phase 5: Payments

### Phase 6: Real-Time + Maps

### Phase 7: Dashboards + Polish

---

## 🚀 Current Status

👉 Auth system completed
👉 Middleware + role-based access completed
👉 Next step: **Workers System (APIs + UI)**

---

## 🧠 Developer Notes

* Focus on understanding, not just building
* Follow clean architecture
* Always test APIs using Postman
* Think like building a real product, not just a project

---
