/* eslint-disable import/prefer-default-export */
import { ADD_COMMENT } from './types';

export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};
