# 🚀 KariGo - Full Stack Service Marketplace

KariGo is a full-stack web application where users can find workers, book services, and manage jobs with a real-world workflow including authentication, booking lifecycle, payments, and escrow logic.

---

# 📌 Current Project Status

## ✅ Completed Features

### 🔐 Authentication System

* User registration & login
* JWT-based authentication
* Role-based access (User / Worker)

---

### 👷 Workers System

* View all workers
* Worker profile page
* Worker application system

---

### 📅 Booking System

* Users can book workers
* Booking stored in database
* User dashboard to view bookings

---

### 👨‍💼 Worker Dashboard

* View assigned bookings
* Accept / Reject bookings
* Mark work as completed

---

### 💳 Payment System (Test Mode)

* Razorpay integration (test mode)
* Create order from backend
* Payment popup in frontend
* Payment verification using signature (secure)

---

### 📍 Location System

* User location captured using browser (GPS)
* Stored in database
* Required before booking

---

### 🔄 Booking Lifecycle (Core Logic)

```
pending → accepted → completed_by_worker → confirmed_by_user → paid_to_worker
                      ↘ disputed
```

---

### 💰 Escrow System (Simulation)

* Payment collected upfront
* Platform holds money
* Worker marks work complete
* User confirms OR auto-release
* Platform keeps 10% commission

---

### ⏱️ Auto Release System

* Tracks `completed_at` timestamp
* If user doesn’t respond in 24 hours:
  → payment auto released

---

### 🔐 Secure Payment Flow

```
Payment → Signature Verification → Booking Creation
```

---

# ⚠️ Pending / Upcoming Features

### 📱 Notifications

* SMS / WhatsApp integration (Twilio / API)

---

### 🗺️ Worker Location & Maps

* Show worker location on map
* Distance-based filtering

---

### ⚡ Real-Time Features

* Live updates using Socket.io

---

### 💳 Production Payments

* Switch to live Razorpay keys
* Real transactions
* Payout system (advanced)

---

### 👑 Admin Panel

* Manage users
* Approve workers
* Monitor transactions

---

### 🌍 Deployment

* Backend → Render / Railway
* Frontend → Vercel
* Database → Neon / Supabase

---

# 🧠 Tech Stack

## Frontend

* React (Vite)
* Tailwind CSS
* Axios

## Backend

* Node.js
* Express.js
* PostgreSQL

## Authentication

* JWT
* bcrypt

## Payments

* Razorpay (Test Mode)

---

# 🧪 Test Credentials

Use Razorpay test card:

```
Card Number: 4111 1111 1111 1111
Expiry: Any future date
CVV: 123
OTP: 123456
```

---

# 🚀 How to Run Locally

## Backend

```
cd back-end
npm install
npm run dev
```

## Frontend

```
cd front-end
npm install
npm run dev
```

---

# 📊 Project Progress

```
Core Backend        ✅
Booking System      ✅
Payments (Test)     ✅
Escrow Logic        ✅
Auto Release        ✅
--------------------------------
Frontend Polish     🔴
Deployment          🔴
Notifications       🔴
```

---

# 🎯 Next Steps

1. Improve frontend UI/UX
2. Add notifications (SMS/WhatsApp)
3. Integrate maps & worker location
4. Deploy full application
5. Switch to production payments

---

# 💡 Project Vision

KariGo aims to become a **real-world service marketplace platform** similar to:

* Urban Company
* Uber (service model)
* Freelance marketplaces

---

# 👨‍💻 Author

Santhosh
Full Stack Developer | AI Enthusiast

---

🔥 This project demonstrates real-world full-stack development including secure payments, escrow systems, and scalable architecture.
