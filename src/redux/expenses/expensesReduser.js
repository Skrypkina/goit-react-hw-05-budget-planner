import { expenseType } from './expensesActions';

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case expenseType.ADD_EXPENSE:
      return [...state, action.payload];

    case expenseType.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload);

    default:
      return state;
  }
};

export default expensesReducer;
