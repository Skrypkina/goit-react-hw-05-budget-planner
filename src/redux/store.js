import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetReducer from './budget/budgetReduser';
import expensesReducer from './expenses/expensesReduser';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
