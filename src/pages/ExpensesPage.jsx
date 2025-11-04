import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList'; 
import ExpenseFilter from '../components/ExpenseFilter'; 
import { DUMMY_EXPENSES, filterExpenses } from '../services/ExpenseService'; 

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); 
  const [filters, setFilters] = useState({ category: 'All' }); 
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
  const filterChangeHandler = (newFilters) => {
    setFilters(newFilters);
  };
  
  
  const filteredExpenses = filterExpenses(expenses, filters);

  return (
    <div>
      <h2>Add New Expense</h2>
      <ExpenseForm onAddExpense={addExpenseHandler} /> 
  
      <ExpenseFilter 
        onFilterChange={filterChangeHandler} 
        filteredExpenses={filteredExpenses} 
      />
      
      
      <ExpenseList 
        items={filteredExpenses} 
        onDeleteItem={deleteItemHandler} 
      /> 
    </div>
  );
};

export default ExpensesPage;