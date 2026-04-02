import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const addItem = (item) =>
  axios.post(BASE_URL + "/add", item);

export const matchItems = (name, status) =>
  axios.get(`${BASE_URL}/match?name=${name}&status=${status}`);

export const resolveItem = (id) =>
  axios.put(`http://localhost:8080/resolve/${id}`);

// import axios from "axios";

// const BASE_URL = "http://localhost:8080";

// export const addItem = (item) =>
//   axios.post(BASE_URL + "/add", item);

// export const matchItems = (name, status) =>
//   axios.get(`${BASE_URL}/match?name=${name}&status=${status}`);