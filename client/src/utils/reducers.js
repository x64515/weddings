import { useReducer } from 'react';
import { UPDATE_WEDDING } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_WEDDING:
      return {
        ...state,
        wedding: [...action.wedding],
      };
      
    default:
      return state;
  }
};

export function useWeddingReducer(initialState) {
  return useReducer(reducer, initialState);
}
