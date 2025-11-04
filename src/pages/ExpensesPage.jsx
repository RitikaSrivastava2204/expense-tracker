
import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList'; 

const DUMMY_EXPENSES = [
  { id: 'e1', amount: 12.50, category: 'Food', date: new Date(2025, 10, 1) },
  { id: 'e2', amount: 89.99, category: 'Travel', date: new Date(2025, 10, 3) },
];

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const deleteItemHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(expense => expense.id !== expenseId);
      return updatedExpenses;
    });
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler} /> 
      <ExpenseList items={expenses} onDeleteItem={deleteItemHandler} /> 
    </div>
  );
};

export default ExpensesPage;