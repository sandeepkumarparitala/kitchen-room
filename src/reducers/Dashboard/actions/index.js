import axios from "axios";
import { callBaseUrl } from "../../constants";

export const requestCall = data => async (dispatch, getState) => {
  const response = await axios.post(callBaseUrl(), { userid: 123 });
};
