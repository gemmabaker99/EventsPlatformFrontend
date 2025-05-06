## Eventify Frontend

To visit the hosted version of this site, go to https://eventifyevents.netlify.app/

This is the frontend for the Eventify app – a React-based application that allows users to explore public events, sign up to save them, and create custom events for personal or staff use.

The app connects to a separate Express backend and PostgreSQL database, and is styled with tailwind.

Built with:
-React
-Vite
-React Router
-Axios
-Render (backend + DB hosting)
-Netlify (frontend hosting)

Features:
-Search for events by city

- Sign up or log in to save events
- View your saved events
- Staff: Create and manage custom events
- User authentication
- Fully responsive design

## Getting Started Locally

To run this project locally:

git clone https://github.com/gemmabaker99/EventsPlatformFrontend
npm install
create a .env file with VITE_BACKEND_URL=https://eventify-api-odn9.onrender.com
npm run dev to start the app
