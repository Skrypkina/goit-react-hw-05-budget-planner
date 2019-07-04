export const expenseType = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
};

export const addExpense = ({ name, id, amount }) => ({
  type: expenseType.ADD_EXPENSE,
  payload: {
    name,
    id,
    amount,
  },
});

export const removeExpense = id => ({
  type: expenseType.REMOVE_EXPENSE,
  payload: id,
});
