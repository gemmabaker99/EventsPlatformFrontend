import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
});

export function fetchEvents() {
  return app.get("/events").then((response) => {
    console.log(response);
    return response.data.events;
  });
}

export function fetchEventDetails(id) {
  return app.get(`/events/${id}`).then((response) => {
    return response.data;
  });
}

export default app;
