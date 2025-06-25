✅ Task Manager Web Application
A full-stack Task Manager Web App built using React.js, Node.js, Express.js, and MySQL/PostgreSQL (SQL Edition), with JWT Authentication, Email OTP verification, and responsive UI using Tailwind CSS. Deployed on Vercel (Frontend) and Railway (Backend) and Redux for state Management.


🚀 Features
✉️ OTP Verification via Email

🧪 Tested API endpoints using Postman

🔐 JWT Token Authentication

👤 User Authentication (Login, Signup)

📋 CRUD for Tasks (Create, Read, Update)

🌐 Fully responsive UI with Tailwind CSS

☁️ Deployment: Vercel (frontend) & Railway (backend)


task-manager/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── utils/


🧠 Tech Stack
Frontend

React.js

Redux Toolkit

Tailwind CSS

Axios

Hot Toast



Backend
Node.js

Express.js

Sequelize/Knex.js (with MySQL or PostgreSQL)

Nodemailer (for OTP)

JWT

⚙️ Environment Variables
Backend .env
ini
Copy
Edit
PORT=4000
DB_HOST=...
DB_USER=...
DB_PASSWORD=...
DB_NAME=...
JWT_SECRET=...
EMAIL_USER=...
EMAIL_PASS=...

Frontend .env

VITE_BACKEND_URL=https://your-backend-url.com/api/v1


📬 API Endpoints
Endpoint	Method	Description
/auth/sendotp	POST	Send OTP to Email
/auth/signup	POST	User Registration
/auth/login	POST	User Login
/tasks/	GET	Get All Tasks
/tasks/:id	PUT	Update Task

🧪 Tested with Postman
Send OTP to email ✅

Verify email OTP ✅

Create User ✅

Login User ✅

CRUD Tasks ✅


🌍 Deployment
Frontend (React.js) – https://task-five-eta.vercel.app/

Backend (Express.js) – https://task-production-b011.up.railway.app/






