import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  createProductRequest: ['data'],
  createProductSuccess: ['data'],
  createProductFailure: ['message'],
});

const INITIAL_STATE = {
  data: [],
  loading: false,
};

const createSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  data: [{ ...action.data }],
});
const createFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
});

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_PRODUCT_SUCCESS]: createSuccess,
  [Types.CREATE_PRODUCT_FAILURE]: createFailure,
});
