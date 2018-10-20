import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  loginUserRequest: ['userData'],
  loginUserSuccess: ['userData'],
  loginUserFailure: ['message'],
  createUserRequest: ['userData'],
  createUserSuccess: ['userData'],
  createUserFailure: ['message'],
  logout: null,
});

const INITIAL_STATE = {
  data: [],
  isLoggedIn: false,
  userLogged: null,
  loading: false,
};

const loginSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  userLogged: action.userData,
  isLoggedIn: true,
});
const loginFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
  isLoggedIn: false,
});

const createSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  data: [{ ...action.userData }],
});
const createFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
});

const logout = (state = INITIAL_STATE) => ({ ...state, ...INITIAL_STATE });

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_USER_SUCCESS]: loginSuccess,
  [Types.LOGIN_USER_FAILURE]: loginFailure,
  [Types.CREATE_USER_SUCCESS]: createSuccess,
  [Types.CREATE_USER_FAILURE]: createFailure,
  [Types.LOGOUT]: logout,
});
