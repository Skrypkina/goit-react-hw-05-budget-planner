// import { combineReducers } from 'redux';
import { Type } from './budgetActions';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case Type.SAVE_BUDGET:
      return action.payload;

    default:
      return state;
  }
};

export default budgetReducer;
