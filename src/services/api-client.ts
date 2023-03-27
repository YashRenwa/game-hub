import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9004274374ec49e4bd2de6b93eaf4b33",
  },
});
