# 🏋️ MusclesStrain – Learn • Train • Achieve

**MusclesStrain** is a modern, interactive GYM website designed to help fitness enthusiasts **learn exercises**, **track progress**, and **book memberships** — both **offline** and **online**.  
Whether you're a beginner or an experienced athlete, MusclesStrain offers structured workout guides, training tips, and an easy membership booking system.

---

## 🌐 Live Demo

🔗 **Website**: https://musclesstrain.example.com *(Replace with your actual domain)*

---

## 🚀 Features

- 📚 **Learn Exercises** – Step-by-step tutorials for various workouts
- 🎥 **Visual Guides** – Images and videos for proper form
- 📅 **Book Memberships** – Choose **offline** or **online** membership plans
- 🧾 **Membership Management** – Track plan duration and renewals
- 💬 **Trainer Contact** – Get professional guidance
- 📱 **Responsive Design** – Works on mobile, tablet, and desktop
- 🌈 **User-friendly UI** – Simple navigation and clean interface

---

## 📦 Tech Stack

- **Frontend**: React.js, TailwindCSS, React Router DOM  
- **Backend**: Node.js, Express.js, MongoDB  
- **Auth & Booking**: JWT Authentication, Stripe/PayPal *(for online payments)*  
- **Hosting**: Vercel / Netlify *(Frontend)*, Render / Heroku *(Backend)*  
- **Media**: Cloudinary *(for exercise videos and images)*

---

## ⚙️ Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/musclesstrain.git
cd musclesstrain
````

---

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

### 3. Environment Variables

#### ✅ `.env` for Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PAYMENT_GATEWAY_KEY=your_payment_key
```

---

### 4. Start the Application

#### Option 1: Run Backend and Frontend Separately

```bash
# Start Backend
cd backend
npm run dev
```

```bash
# Start Frontend
cd ../frontend
npm run dev
```

#### Option 2: Use Root-Level Concurrent Script

If your project has a root-level `package.json`, add:

```json
"scripts": {
  "dev": "concurrently \"npm run server\" \"npm run client\"",
  "server": "cd backend && nodemon server.js",
  "client": "cd frontend && npm run dev"
}
```

Then run:

```bash
npm run dev
```

---

## 📁 Project Structure

```
musclesstrain/
├── backend/
│   ├── controllers/      # API logic
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── utils/            # Helper functions
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Exercise list, booking, profile
│   │   └── App.jsx
│   ├── public/
│   └── .env
├── .env
└── README.md
```

---

## 👤 Author

Built by **Akshay Kumar Hiran** 💻
Open to feedback, suggestions, and collaboration!


Do you want me to add that?
```
