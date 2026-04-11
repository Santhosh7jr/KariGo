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
* Socket.io (for real-time)

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
  middleware/
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

---

### 🔜 Upcoming Features

#### 🔐 Auth & Security

* Auth middleware
* Role-based access control

#### 🧑‍🔧 Workers System

* Worker listing
* Worker profile page
* Worker application approval system

#### 📅 Booking System

* Book worker
* Select date/time
* Booking lifecycle (pending → accepted → completed)

#### 💳 Payment System

* Razorpay integration
* Payment verification
* Worker earnings system

#### ⚡ Real-Time Features

* Booking notifications
* Live updates (Socket.io)

#### 🗺️ Location System

* Map integration
* Distance-based worker search

#### 📊 Dashboards

* User dashboard (bookings/history)
* Worker dashboard (jobs/earnings)
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
* Strong backend + frontend integration

---

## 📈 Development Roadmap

### Phase 1: Foundation ✅

* Backend setup
* DB connection
* Auth system

### Phase 2: Auth Middleware (NEXT)

* Protect routes
* Role-based access

### Phase 3: Workers System

* Worker APIs
* UI pages

### Phase 4: Booking System

* Booking APIs + UI

### Phase 5: Payments

* Razorpay integration

### Phase 6: Real-Time + Maps

* Socket.io
* Location features

### Phase 7: Dashboards + Polish

* Final UI improvements
* Deployment

---

## 🧠 Developer Notes

* Focus on understanding, not just building
* Follow clean architecture
* Avoid hardcoding
* Always test APIs before frontend integration

---

## 🚀 Current Status

👉 Auth system completed
👉 Next step: **Auth Middleware + Protected Routes**
