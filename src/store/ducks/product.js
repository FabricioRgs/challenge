import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  createProductRequest: ['data'],
  createProductSuccess: ['data'],
  createProductFailure: ['message'],
  setProductFilter: ['filter'],
});

const INITIAL_STATE = {
  data: [],
  loading: false,
  filter: '',
};

const createSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  data: [...state.data, action.data],
});
const createFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
});
const setFilter = (state = INITIAL_STATE, action) => ({
  ...state,
  filter: action.filter,
});

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_PRODUCT_SUCCESS]: createSuccess,
  [Types.CREATE_PRODUCT_FAILURE]: createFailure,
  [Types.SET_PRODUCT_FILTER]: setFilter,
});
