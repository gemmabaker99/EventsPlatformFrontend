import axios from "axios";
import defaultImg from "./src/assets/default.jpeg";

const app = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

export function fetchEvents(city) {
  return app
    .get("/api/events", {
      params: { city },
    })
    .then((response) => {
      return response.data.events || [];
    });
}

export function fetchEventDetails(id) {
  return app.get(`/api/events/${id}`).then((response) => {
    return response.data;
  });
}

export function signupUser(formData) {
  return app
    .post("/api/users/signup", formData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function loginUser(email, password) {
  return app
    .post("/api/users/login", { email, password })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function eventSignUp(userId, event) {
  return app
    .post(`/api/userevents/${userId}`, {
      event_id: event.id,
      event_name: event.name,
      event_date: event.dates?.start?.localDate || event.date,
      event_image: event.images?.[0]?.url || defaultImg,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

export function getUserEvents(userId) {
  return app
    .get(`/api/userevents/${userId}`)
    .then((response) => {
      return response.data.events;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

export function removeUserEvent(eventId, userId) {
  return app
    .delete(`/api/userevents/${userId}/${eventId}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

export function getCustomEventsForStaff(id) {
  return app
    .get(`/api/custom-events/user/${id}`)
    .then((response) => {
      return response.data.events;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

export function postCustomEvent(eventData) {
  return app
    .post("/api/custom-events", eventData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

export function deleteCustomEvent(eventId) {
  return app
    .delete(`/api/custom-events/${eventId}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

export function getAllCustomEvents() {
  return app
    .get("/api/custom-events")
    .then((response) => {
      return response.data.events;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

export function getCustomEventById(id) {
  return app
    .get(`/api/custom-events/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

export default app;
