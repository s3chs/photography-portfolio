import axios from "axios";

const service = axios.create({
  baseUrl: process.env.REACT_APP_BACKEND_URL,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  service,

  getAll(id) {
    // console.log(id);
    return service.get("/pictures/" + id);
  },
};
