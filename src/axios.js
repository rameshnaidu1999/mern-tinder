import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-ramesh.herokuapp.com/",
});

export default instance;
