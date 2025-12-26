# MERN Movie Application – Role-Based Access Control (RBAC)

A full-stack **MERN Movie Application** implementing **JWT-based authentication** and **role-based access control**.  
Users can browse and search movies, while **admins** can manage movie data securely.

---

## **Features**

### **User Features**
- View all movies  
- Search movies by **title or description**  
- Sort movies by:
  - Name
  - Rating
  - Release Date
  - Duration
- Responsive UI using **Material-UI**
- Pagination support

### **Admin Features**
- Secure login using **JWT**
- Add new movies
- Edit existing movies
- Delete movies
- Protected **admin-only routes**

---

## **Tech Stack**

### **Frontend**
- React.js
- Material-UI
- Context API
- Axios

### **Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### **Deployment**
- Frontend: Vercel / Netlify
- Backend: Railway
- Database: MongoDB Atlas

---

## **API Base URL**




---

## **Authentication API**

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST   | `/api/auth/register` |Admin register |
| POST   | `/api/auth/login` | User/Admin login |

---

## **Movie APIs**

| Method | Endpoint | Description | Access |
| ------ | -------- | ----------- | ------ |
| GET    | `/api/movies` | Get all movies | Public |
| GET    | `/api/movies/search?q=` | Search movies | Public |
| GET    | `/api/movies/sorted?by=` | Sort movies | Public |
| POST   | `/api/movies` | Add new movie | Admin |
| PUT    | `/api/movies/:id` | Update movie | Admin |
| DELETE | `/api/movies/:id` | Delete movie | Admin |

### **Sort Parameters**
by = name | rating | releaseDate | duration




---

## **Project Setup**

### **1️⃣ Clone Repository**
```bash
git clone https://github.com/308568/MERN-Movie-App.git
cd MERN-Movie-App



2️⃣ Backend Setup
cd backend
npm install
npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm start


Environment Variables
Backend (.env)
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret

Frontend 
baseURL: "http://localhost:5000/api


✦ Admin Authentication

JWT-based authentication

Role-based middleware protection

Only admin users can add, edit, or delete movies

✪ Deployment Status

Backend deployed on Railway

Frontend deployed on Netlify

MongoDB hosted on MongoDB Atlas


Live Application URL

🔵 Backend API – https://mern-movie-app-production-663c.up.railway.app/api/movies

🟢 Frontend API - https://mern-movie-app-production.netlify.app/