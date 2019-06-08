import Cookies from "universal-cookie";

const cookies = new Cookies();

export const appSetToken = jwt => cookies.set("jwt", jwt);

export const appHandleLoginResponse = (authClient, response) => (
  dispatch,
  getState
) => {};
