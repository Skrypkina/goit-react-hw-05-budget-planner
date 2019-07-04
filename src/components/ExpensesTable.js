import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from './shared/Button';
import { removeExpense } from '../redux/expenses/expensesActions';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items, removeExpense }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => removeExpense(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const mapStateToProps = state => ({
  items: state.expenses,
});

const mapDispatchToProps = {
  removeExpense,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
