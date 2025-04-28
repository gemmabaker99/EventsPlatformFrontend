import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
});

export function fetchEvents(city) {
  return app
    .get("/events", {
      params: { city },
    })
    .then((response) => {
      console.log(response);
      return response.data.events || [];
    });
}

export function fetchEventDetails(id) {
  return app.get(`/events/${id}`).then((response) => {
    return response.data;
  });
}

export function signupUser(formData) {
  return app
    .post("/users/signup", formData)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function loginUser(email, password) {
  return app
    .post("/users/login", { email, password })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default app;
