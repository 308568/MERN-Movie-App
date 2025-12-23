# MERN Movie Application – Role-Based Access Control (RBAC)

A full-stack **MERN Movie Application** with **JWT-based authentication** and **role-based access control**. Users can browse movies; admins can manage movie data.

---

## Features

### User

* View IMDb Top Movies
* Search by **title or description**
* Sort by **name, rating, release date, duration**
* Responsive UI (Material-UI)
* Pagination for large lists

### Admin

* Secure login (JWT)
* Add, Edit, Delete movies
* Admin-only protected routes

---

## Tech Stack

* **Frontend:** React, Material-UI, Context API, Axios
* **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT
* **Deployment:** Frontend (Vercel/Netlify), Backend (Heroku/Railway), MongoDB Atlas

---

## API Endpoints

* `GET /movies` – list movies
* `GET /movies/search?q=` – search movies
* `GET /movies/sorted?by=` – sort movies
* `POST /movies` – add movie (admin)
* `PUT /movies/:id` – edit movie (admin)
* `DELETE /movies/:id` – delete movie (admin)
* `POST /auth/login` – user/admin login

---

## Installation

1. Clone project
2. Backend:

```bash
cd backend
npm install
npm run dev
```

3. Frontend:

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

**Backend `.env`**

```
PORT=5000
MONGO_URI=<your_mongo_connection>
JWT_SECRET=<your_jwt_secret>
```

**Frontend `.env`**

```
REACT_APP_API_URL=<backend_api_url>
```

---

## Admin Login Example

```
Email: admin@movieapp.com
Password: admin123
```

> Admin access required for movie management; users can browse without login.

---

## Notes

* IMDb auto-seed script included (`backend/scripts/imdbSeed.js`)
* Robust error handling for unauthorized access and invalid input
* Responsive, professional UI using Material-UI
