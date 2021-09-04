import axios from "axios";

const service = axios.create({
  baseUrl: process.env.React_APP_BACKEND_URL,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  service,

  getAll(id) {
    return service.get("/pictures/" + id);
  },
};
