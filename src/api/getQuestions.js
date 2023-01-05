import axios from "axios";

const API =axios.create({ baseURL: "http://localhost:8080"})

export const fetchQuestions = () => API.get("/questions")
