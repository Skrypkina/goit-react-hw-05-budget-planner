export const Type = {
  SAVE_BUDGET: 'SAVE_BUDGET',
};

export const saveBudget = value => ({
  type: Type.SAVE_BUDGET,
  payload: value,
});
