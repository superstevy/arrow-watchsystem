import axios from "axios";

const baseURL = "https://api.tvmaze.com/";
const arrowShowId = 4;
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
  getArrowShowDetail = async () => {
    return api.get("/shows/" + arrowShowId, {});
  };
  getArrowEpisodeList = async () => {
    return api.get("/shows/" + arrowShowId + "/episodes", {});
  };
  getArrowCastList = async () => {
    return api.get("/shows/" + arrowShowId + "/cast", {});
  };
  getCast = async (castId) => {
    return api.get("/people/" + castId, {});
  };
}
