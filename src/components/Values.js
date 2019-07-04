import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Stat from './Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const totalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const total = (budget, expenses) => budget - expenses;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={totalExpenses(expenses)} />
    <Stat
      label="Balance"
      value={total(budget, totalExpenses(expenses))}
      isPositive={total(budget, totalExpenses(expenses)) >= 0}
    />
  </Container>
);

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: state.expenses,
});

export default connect(
  mapStateToProps,
  null,
)(Values);
