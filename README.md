# 💬 PingNest

### CHAT · CONNECT · NEST

**PingNest** is a full-stack real-time chat application built with the **MERN stack and Socket.IO**. It provides secure authentication, one-to-one real-time messaging, image sharing, online presence, profile management, and customizable themes.

---

## ✨ Features

* 🔐 User signup and login
* 🔒 JWT-based authentication
* 🔑 Password hashing with bcryptjs
* 💬 Real-time one-to-one messaging
* ⚡ Real-time communication using Socket.IO
* 🟢 Online user presence indicators
* 🖼️ Image sharing in conversations
* 👤 Profile picture upload
* ☁️ Cloudinary image storage
* 🎨 Multiple UI themes
* 📱 Responsive chat interface
* 🔔 Toast notifications
* 📋 Recent conversations move to the top
* 🛡️ Protected API routes
* 🍪 Cookie-based authentication

---

## 🛠️ Tech Stack

### Frontend

* React 19
* Vite
* React Router
* Tailwind CSS
* DaisyUI
* Zustand
* Axios
* Socket.IO Client
* Lucide React
* React Hot Toast
* Emoji Picker React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JSON Web Token (JWT)
* bcryptjs
* Cloudinary
* Cookie Parser
* CORS

---

## 🏗️ Project Architecture

```text
PingNest/
│
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   │
│   │   ├── lib/
│   │   │   ├── cloudinary.js
│   │   │   ├── db.js
│   │   │   ├── socket.js
│   │   │   └── utils.js
│   │   │
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── message.model.js
│   │   │   └── user.model.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   │
│   │   ├── seeds/
│   │   │   └── user.seed.js
│   │   │
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   └── vite-project/
│       ├── src/
│       │   ├── component/
│       │   ├── constant/
│       │   ├── lib/
│       │   ├── pages/
│       │   ├── store/
│       │   ├── App.jsx
│       │   ├── App.css
│       │   ├── index.css
│       │   └── main.jsx
│       │
│       ├── public/
│       ├── package.json
│       ├── package-lock.json
│       └── vite.config.js
│
└── README.md
```

---

## 🔄 How It Works

PingNest follows a **client-server architecture** where the React frontend communicates with the Express backend through REST APIs, while Socket.IO handles real-time events.

```text
                    ┌──────────────────┐
                    │     React UI     │
                    │   Vite Frontend  │
                    └────────┬─────────┘
                             │
                       HTTP / Axios
                             │
                             ▼
                    ┌──────────────────┐
                    │  Express Server  │
                    │    REST APIs     │
                    └────────┬─────────┘
                             │
                    ┌────────┴─────────┐
                    │                  │
                    ▼                  ▼
              ┌───────────┐      ┌────────────┐
              │  MongoDB  │      │ Cloudinary │
              │  Database │      │   Images   │
              └───────────┘      └────────────┘

                             ▲
                             │
                         Socket.IO
                             │
                             ▼
                    Real-time Messaging
```

---

## 🔐 Authentication

PingNest uses **JWT-based authentication** with HTTP cookies.

### Signup Flow

1. User submits name, email, and password.
2. Backend validates the request.
3. Password is securely hashed using `bcryptjs`.
4. User data is stored in MongoDB.
5. A JWT is generated.
6. The JWT is stored in an authentication cookie.
7. The authenticated user is returned to the frontend.

### Login Flow

1. User submits email and password.
2. Backend finds the user by email.
3. Password is verified using `bcryptjs`.
4. A JWT is generated.
5. The authentication cookie is created.
6. User information is returned to the frontend.

---

## ⚡ Real-Time Messaging

**Socket.IO** is used to provide real-time communication between users.

When a message is sent:

```text
User A
   │
   │ Send message
   ▼
Express API
   │
   ├── Save message → MongoDB
   │
   └── Socket.IO
          │
          ▼
       User B
```

The receiver receives the new message immediately without refreshing the page.

Socket.IO is also used to maintain and broadcast the list of currently online users.

---

## 💬 Messaging

The chat system supports:

* Sending text messages
* Sending images
* Receiving messages in real time
* Loading previous conversations
* Online user indicators
* Recent conversation ordering
* Selecting different users
* Real-time message updates

---

## 🖼️ Image Uploads

PingNest uses **Cloudinary** for image storage instead of storing image files directly in MongoDB.

Images are used for:

* Profile pictures
* Chat images

Only the resulting Cloudinary URL is stored with the relevant user or message data.

---

## 🎨 Theme Support

The frontend uses **Tailwind CSS and DaisyUI** for the user interface and theme customization.

**Zustand** is used to manage theme state on the client side.

---

## 📱 Application Pages

* Login
* Signup
* Home / Chat
* Profile
* Settings

---

## ⚙️ Installation

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB or MongoDB Atlas
* Cloudinary account

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd PingNest
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend/vite-project
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5001

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Recommended `.gitignore` entries:

```gitignore
node_modules/

.env
.env.local
.env.*.local

dist/
```

---

## ▶️ Running the Application

### Start the Backend

From the `backend` directory:

```bash
npm run dev
```

Backend:

```text
http://localhost:5001
```

### Start the Frontend

Open another terminal:

```bash
cd frontend/vite-project
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

## 🧠 Key Concepts Demonstrated

This project demonstrates practical experience with:

* Full-stack web development
* REST API development
* Authentication and authorization
* JWT and cookie-based authentication
* Password hashing
* MongoDB database operations
* Mongoose models
* Real-time communication
* Socket.IO
* React state management
* Zustand
* Protected API routes
* Cloudinary integration
* Image uploads
* Responsive UI development
* Frontend/backend integration
* Error handling

---

## 🔮 Future Improvements

Potential future improvements include:

* Group chats
* Message reactions
* Message editing and deletion
* Read receipts
* Push notifications
* Voice and video calls
* Message search
* File sharing
* Message notifications
* Production deployment

---

## 👨‍💻 Author

**Vedant Kadia**

---

⭐ If you found PingNest interesting, consider giving the repository a star
