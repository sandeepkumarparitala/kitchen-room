import { createBrowserHistory } from "history";
import axios from "axios";

export const history = createBrowserHistory();

export const setDefaultToken = token => {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
