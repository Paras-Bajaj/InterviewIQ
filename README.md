# 🚀 InterviewIQ

> **AI-Powered Mock Interview Platform** that helps users prepare for technical and HR interviews through AI-generated questions, real-time evaluation, and personalized feedback.

![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📖 Overview

InterviewIQ is a full-stack AI-powered interview preparation platform designed to simulate real interview experiences. The application generates personalized interview questions based on the user's selected role and experience level, evaluates responses using AI, and provides detailed feedback to help users improve their interview performance.

The project focuses on creating a seamless interview experience with secure authentication, modern UI, and intelligent AI assistance, making it an ideal platform for students, freshers, and professionals preparing for job interviews.

---

## ✨ Features

- 🔐 Secure User Authentication
- 🤖 AI-Generated Interview Questions
- 💼 Role-Based Interview Sessions
- 📊 AI Feedback & Performance Analysis
- 📝 Technical & HR Interview Support
- 📂 Interview History
- ⚡ Responsive & Modern UI
- ☁️ MongoDB Database Integration

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend

- Node.js
- Express.js
- JWT Authentication
- Cookie Parser
- Multer

### Database

- MongoDB
- Mongoose

### AI

- Google Gemini API

### Development Tools

- Git
- GitHub

---

## 📂 Project Structure

```text
InterviewIQ/
│
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Express Backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Getting Started

### Prerequisites

Before running the project, ensure you have installed:

- Node.js (v18 or above)
- npm
- MongoDB (Local or Atlas)
- Git

---

## 📥 Clone the Repository

```bash
git clone https://github.com/Paras-Bajaj/InterviewIQ.git

cd InterviewIQ
```

---

## 📦 Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** and **client** directory and add the following variables:
### server .env file 
```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your openrouter api key

RAZORPAY_KEY_ID=your razorpay api key

RAZORPAY_SECRET=your razorpay secret
```
### client .env file
```env
VITE_RAZORPAY_ID=your razorpay api key

VITE_FIREBASE_API_KEY=your firebase api key
```
---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```


**Frontend:** `http://localhost:5173`

**Backend:** `http://localhost:5000`
