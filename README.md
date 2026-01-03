🛒 Slooze Frontend Challenge – Role-Based Inventory System

This project is a frontend-only implementation of the Slooze Front-End Challenge.
It demonstrates authentication, role-based access control, protected routes, UI enhancements, and theme management, using assumed/mock data as permitted by the problem statement.

🚀 Tech Stack

React + Vite

React Router DOM

Context API (Authentication & Theme)

CSS (No UI library)

LocalStorage (Session & Theme persistence)

🔐 Authentication & Role-Based Access
Mocked Users (Assumed Data)
Role	Email	Password
Manager	manager@slooze.com
	1234
Store Keeper	store@slooze.com
	1234

⚠️ Backend APIs are mocked as allowed by the challenge instructions.
Authentication is simulated using Context API and localStorage.

🎯 Feature Breakdown & Coverage
1️⃣ Authentication & Access

✅ Login using email & password

✅ Role-based access control

✅ Only Managers can access the Dashboard

✅ Session persistence using localStorage

2️⃣ Core UI Features
📊 Dashboard (Manager Only)

Restricted via role-based route protection

Accessible only after successful authentication

📦 View All Products

Accessible to Managers & Store Keepers

Products loaded from assumed sample data

➕ Add Products (Manager Only – Optional Feature)

UI-level product creation form

Role-protected route

Demonstrates inventory modification flow

3️⃣ UI Enhancements
🌗 Light / Dark Mode

Global theme management using Context API

Theme preference persisted in localStorage

🧭 Role-Based UI Restrictions (Bonus Implemented)

Navigation menu dynamically changes based on user role

Restricted links hidden for unauthorized roles

Route guards prevent manual URL access

🔒 Role-Based Access Rules
Feature	Manager	Store Keeper
Login	✅	✅
Dashboard	✅	❌
View Products	✅	✅
Add Products	✅	❌
Role-Based UI	✅	✅
🛠️ Assumptions & Mocked Implementations

As permitted by the problem statement:

Backend APIs (/auth/login, /products) are mocked

Product data is stored locally in the frontend

No real server-side persistence is used

Focus is on frontend logic, UI behavior, and access control

All assumptions are clearly stated to align with evaluation expectations.

📁 Project Structure
slooze-frontend/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Products.jsx
│   │   ├── AddProduct.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md

▶️ How to Run Locally
npm install
npm run dev


The app will run at:

http://localhost:5173

✅ Challenge Compliance Summary

✔ Authentication & Role-Based Access

✔ Protected Routes

✔ Manager-Only Dashboard

✔ Product Viewing for All Roles

✔ Optional Add Product Feature

✔ Light/Dark Theme

✔ Role-Based Menu Restrictions (Bonus)

✔ Clear assumptions stated

📤 Submission Notes

This repository fulfills all mandatory requirements

Optional features are implemented at UI level

Backend behavior is intentionally mocked

Project is ready for evaluation
