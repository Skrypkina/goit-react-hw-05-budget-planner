import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm/BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <BudgetForm />
        <Values />
        <ExpenseForm />
        {this.props.expenses.length > 0 && <ExpensesTable />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

export default connect(
  mapStateToProps,
  null,
)(App);
