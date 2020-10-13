import {
  SIGN_IN_USER,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_UP_USER,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from "../actions/authActions";

const initState = {
  signingIn: false,
  signInError: null,

  signingUp: false,
  signUpError: null,
};

export const authReducer = (state = initState, action) => {
  let { type, payload } = action;

  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        signingIn: true,
        signInError: null,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signingIn: false,
        signInError: null,
      };

    case SIGN_IN_ERROR:
      return {
        ...state,
        signingIn: false,
        signInError: payload.error,
      };

    case SIGN_UP_USER:
      return {
        ...state,
        signingUp: true,
        signUpError: null,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signUpError: null,
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        signingUp: false,
        signUpError: payload.error,
      };

    default:
      return state;
  }
};

export default authReducer;
