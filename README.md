
# 🔐 MERN Authentication System

> This project is a **full-stack MERN application** that provides secure user authentication with JWT, role-based access, and CRUD operations for profile management.

---

## 🚀 Features

- 🔧 **Backend API** with Express & MongoDB
- 🔐 JWT Authentication stored in **HTTP-only cookies**
- 🧩 Protected Routes and Endpoints
- 🧠 Custom Middleware to check and store JWT
- 🚨 Centralized Error Handling Middleware
- 🎨 Frontend with React & React Bootstrap
- 🔔 Real-time notifications via React Toastify

---

## 🏗️ Project Structure

### 📦 Backend

```

backend/
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── userModel.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
└── server.js

```

### 💅 Frontend

```

frontend/
├── src/
│   ├── components/
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   └── Profile/
│   │       └── Profile.js
│   ├── utils/
│   │   └── api.js
│   └── App.js

````

---

## ⚙️ Backend Setup

### 🧬 Environment Variables

Rename `.env.example` to `.env` and add:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=abc123  # Replace with a strong secret
````

### 📦 Install Dependencies

```bash
cd backend
npm install
```

**Key Packages:**

* `express` – Node.js Web Framework
* `mongoose` – MongoDB ORM
* `jsonwebtoken` – JWT handling
* `bcryptjs` – Password hashing
* `cookie-parser` – Read cookies
* `express-async-handler` – Handle async errors

### ▶️ Run Backend

```bash
npm run server
```

Runs on [http://localhost:5000](http://localhost:5000)

---

## 🖥️ Frontend Setup

### 📦 Install Dependencies

```bash
cd frontend
npm install
```

**Key Packages:**

* `react` – Frontend library
* `react-router-dom` – Routing
* `react-bootstrap` – UI Components
* `react-toastify` – Toast messages
* `axios` – HTTP requests

### ▶️ Run Frontend

```bash
npm run dev
```

Runs on [http://localhost:3000](http://localhost:3000)

---

## 🔗 Core Functionalities

| Feature           | Path                 | Method |
| ----------------- | -------------------- | ------ |
| 📝 Register       | `/api/auth/register` | `POST` |
| 🔐 Login          | `/api/auth/login`    | `POST` |
| 🔓 Logout         | `/api/auth/logout`   | `POST` |
| 👤 View Profile   | `/api/user/profile`  | `GET`  |
| ✏️ Update Profile | `/api/user/profile`  | `PUT`  |

---

## 🛡️ Security Notes

* 🔒 JWT is stored in **HTTP-only cookies** to prevent XSS attacks.
* 🛑 Routes are protected using `authMiddleware`.
* 🧼 Passwords are hashed with `bcryptjs`.
* 🚫 Unauthorized access throws meaningful errors.

---

## 📦 Run Both Servers

```bash
npm run dev
```

Starts both backend (5000) and frontend (3000) concurrently.

---

## 🏁 Build & Deploy

### 🔧 Build Frontend

```bash
cd frontend
npm run build
```

Creates production-ready assets in `frontend/build`.

### 🚀 Deploy

| Layer    | Recommended Platforms         |
| -------- | ----------------------------- |
| Backend  | Heroku, Render, Railway       |
| Frontend | Netlify, Vercel, GitHub Pages |

Make sure to configure `.env` on your host with:

* `MONGO_URI`
* `JWT_SECRET`

---

## 🧠 Additional Notes

* 💬 React Toastify handles success and error notifications
* 🛡️ Use `protect` middleware to guard any route
* 💻 Minimal and clean UI with React Bootstrap

---

## 👨‍💻 Author

> Created with SIVA E ❤️ for learning and production-ready use.

