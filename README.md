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


As permitted by the problem statement:

Backend APIs (/auth/login, /products) are mocked

Product data is stored locally in the frontend

No real server-side persistence is used

Focus is on frontend logic, UI behavior, and access control

All assumptions are clearly stated to align with evaluation expectations.



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

🚀 Frontend Project Completed – Role-Based Inventory System

<img width="623" height="721" alt="{D037FABD-25E7-435C-BD80-92DD7C7A3529}" src="https://github.com/user-attachments/assets/e64bae95-7db3-4cbc-8945-207f1c5cb9fb" />
<img width="696" height="487" alt="{DD28CF8B-119F-485E-8C7F-D3F3C4B93356}" src="https://github.com/user-attachments/assets/1f77c658-e178-4930-87a7-aca61b0e75e2" />
<img width="712" height="608" alt="{39AA7EB3-3C98-4E52-B92B-40867E6524E2}" src="https://github.com/user-attachments/assets/185025ed-9db2-4ca1-bc46-d361cc9a04dd" />
<img width="647" height="590" alt="{DD32F70C-7FF5-4EE5-B35E-D93F45D56573}" src="https://github.com/user-attachments/assets/f85cb3cc-1508-4b95-ad1e-8246a7480cd1" />




