Pingnest

CHAT · CONNECT · NEST

Pingnest is a real-time full-stack chat application built with the MERN stack and Socket.io. It supports live messaging, image sharing, online-presence indicators, and light/dark theming.

## ✨ Features

* 🔐 User signup and login
* 🔒 JWT-based authentication
* 🔑 Password hashing with bcryptjs
* 💬 Realtime one-to-one messaging
* ⚡ Realtime communication using Socket.IO
* 🟢 Online user status
* 🖼️ Image sharing in chat
* 👤 Profile picture upload
* ☁️ Cloudinary image storage
* 🎨 Multiple UI themes
* 📱 Responsive chat interface
* 🔔 Toast notifications
* 📋 Recent conversations move to the top
* 🛡️ Protected API routes
* 🍪 Cookie-based authentication

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

## 🏗️ Project Architecture

```text
realtime-chat-app/
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

## 🔄 How It Works

The application follows a client-server architecture.

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
              ┌───────────┐      ┌───────────┐
              │  MongoDB  │      │ Cloudinary│
              │  Database │      │   Images  │
              └───────────┘      └───────────┘

                     ▲
                     │
                  Socket.IO
                     │
                     ▼

              Realtime Messaging
```

## 🔐 Authentication

Authentication is handled using **JWT**.

### Signup

When a user creates an account:

1. User submits name, email, and password.
2. Backend validates the input.
3. Password is hashed using `bcryptjs`.
4. User information is stored in MongoDB.
5. A JWT is generated.
6. The JWT is stored using a cookie.
7. The authenticated user is returned to the frontend.

### Login

When a user logs in:

1. Backend finds the user by email.
2. Password is verified using bcrypt.
3. JWT is generated.
4. Authentication cookie is created.
5. User information is returned.

## ⚡ Realtime Messaging

The application uses **Socket.IO** for realtime communication.

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

The receiver gets the new message immediately without refreshing the page.

Socket.IO is also used to track currently online users.

## 💬 Messaging Features

The chat system supports:

* Sending text messages
* Sending images
* Receiving messages in realtime
* Loading previous conversations
* Online user indicators
* Recent conversation ordering
* Selecting different users
* Realtime message updates

## 🖼️ Image Uploads

Images are uploaded to **Cloudinary** rather than being stored directly inside MongoDB.

This is used for:

* Profile pictures
* Chat images

Only the resulting image URL is stored with the user/message data.

## 🎨 Theme Support

The frontend uses **Tailwind CSS and DaisyUI** to provide theme customization.

Theme state is managed using **Zustand**.

## 📱 Pages

The application currently contains:

* Login
* Signup
* Home / Chat
* Profile
* Settings

## ⚙️ Installation

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB or MongoDB Atlas
* Cloudinary account

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd realtime-chat-app
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend/vite-project
npm install
```

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5001

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> **Important:** Never upload `.env` files containing real credentials to GitHub.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
.env.local
.env.*.local
dist/
```

## ▶️ Running the Application

### Start Backend

From the `backend` directory:

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5001
```

### Start Frontend

Open another terminal:

```bash
cd frontend/vite-project
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```


## 🧠 Key Concepts Demonstrated

This project demonstrates practical experience with:

* Full-stack web development
* REST API development
* Authentication and authorization
* JWT and cookies
* Password hashing
* MongoDB database operations
* Mongoose models
* Realtime communication
* Socket.IO
* React state management
* Zustand
* Protected routes
* Cloudinary integration
* Image uploads
* Responsive UI development
* Frontend/backend integration
* Error handling

## 🔮 Future Improvements

Possible future improvements include:

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

## 👨‍💻 Author

**Vedant Kadia**


## 📄 License

This project is created for learning and portfolio purposes.
