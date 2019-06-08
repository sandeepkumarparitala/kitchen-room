import { types } from "../../types/app.js";

export const appSetUserDetails = user => {
  type: types.APP_SET_USER_DETAILS;
  user;
};
