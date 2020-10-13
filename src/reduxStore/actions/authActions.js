import { auth } from "../../firebase/firebase";

// action types
export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";

export const SIGN_UP_USER = "SIGN_UP_USER";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

export const signInUser = (email, password) => {
  return (dispatch, getState) => {
    dispatch({ type: SIGN_IN_USER });

    console.log(`Signing in with email: ${email}  password: ${password}`);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log("auth uid: ", resp.user.uid);
        dispatch({ type: SIGN_IN_SUCCESS });
      })
      .catch((error) => {
        console.log("SignIn error: ", error);
        dispatch({ type: SIGN_IN_ERROR, payload: { error } });
      });
  };
};

export const signUpUser = (email, password) => {
  return (dispatch, getState) => {
    dispatch({ type: SIGN_UP_USER });

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log(
          `Signed up new user with email: ${email}  password: ${password}`
        );
        dispatch({ type: SIGN_UP_SUCCESS });
      })
      .catch((error) => {
        console.log("SignUp error: ", error);
        dispatch({ type: SIGN_UP_ERROR, payload: { error } });
      });
  };
};
