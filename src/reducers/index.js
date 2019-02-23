import { combineReducers } from 'redux';
import { ADD_COMMENT } from '../actions/types';

export const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  comments,
});
