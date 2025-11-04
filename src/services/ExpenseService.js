// src/services/ExpenseService.js

// 1. DUMMY DATA is moved here, simulating data from an API
export const DUMMY_EXPENSES = [
    { id: 'e1', amount: 12.50, category: 'Food', date: new Date(2025, 10, 1) },
    { id: 'e2', amount: 89.99, category: 'Travel', date: new Date(2025, 9, 15) },
    { id: 'e3', amount: 450.00, category: 'Utilities', date: new Date(2024, 5, 20) },
    { id: 'e4', amount: 15.00, category: 'Food', date: new Date(2025, 10, 3) },
  ];
  
  /**
   * Filters the list of expenses based on the selected category.
   * In a real app, this would be done by the backend (API).
   * @param {Array<Object>} expenses - The full list of expenses.
   * @param {Object} filters - The filter state ({ category: '...' }).
   * @returns {Array<Object>} The filtered list.
   */
  export const filterExpenses = (expenses, filters) => {
      return expenses.filter((expense) => {
          const isCategoryMatch = filters.category === 'All' || expense.category === filters.category;
          return isCategoryMatch;
      });
  };
  
  // You can add more helper functions here, like calculateTotal, etc.