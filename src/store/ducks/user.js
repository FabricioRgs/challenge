export const Types = {
  LOGIN_REQUEST: 'user/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'user/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'user/LOGIN_FAILURE',
  LOGOUT: 'user/LOGOUT',
};

const initialState = {
  isLoggedIn: false,
  data: [],
  loading: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return {
        ...state, data: action.payload.userLogin, isLoggedIn: true, loading: false,
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state, error: action.payload.error, isLoggedIn: false, loading: false,
      };
    case Types.LOGOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
}

export const Creators = {
  loginUserRequest: (userLogin, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { userLogin, password },
  }),

  loginUserSuccess: userLogin => ({
    type: Types.LOGIN_SUCCESS,
    payload: { userLogin },
  }),

  loginUserError: (message = 'Erro ao buscar o usuário!') => ({
    type: Types.LOGIN_FAILURE,
    payload: {
      message,
    },
  }),

  logout: () => ({
    type: Types.LOGOUT,
  }),
};
