💰 Expense Tracker App: Penthara Technologies Assignment
This is a minimal, clean, and efficient Expense Tracker application built using React and Vite as a technical assignment for Penthara Technologies.

🚀 Getting Started
This project was bootstrapped with Vite. To run the application locally, follow these simple steps:

Clone the repository:

Bash

git clone [YOUR_GITHUB_REPOSITORY_URL]
Navigate to the project folder:

Bash

cd [your-project-name]
Install dependencies:

Bash

npm install
Start the development server:

Bash

npm run dev
The application will open in your browser, typically at http://localhost:5173.

✨ Key Features & Concepts Used
The core goal of this project was to demonstrate strong frontend architecture, clean code, and effective state management.

1. Architectural & Code Best Practices
Component-Based Architecture: The application is cleanly divided into reusable components (ExpenseForm, ExpenseList, ExpenseItem, etc.) and page views (HomePage, ExpensesPage).

Code Separation of Concerns: We adhere to the best practice of separating UI logic from data logic:

UI/State: Handled in src/pages/ExpensesPage.jsx.

Data Logic: Handled in the dedicated src/services/ExpenseService.js (for filtering and initial data).

File Structure & Naming: Follows the specified best practices (e.g., PascalCase for components, camelCase for variables, clear folder structure).

Component-Scoped Styling: Styles are kept modular (e.g., ExpenseItem.css only contains styles for that component).

Currency Localization: Expense amounts are formatted using Indian Rupees (₹) (INR).

2. React Functionality
React Hooks (useState): Used extensively to manage all critical application data (the list of expenses and the active filter settings).

Data Flow & State Lifting: The form uses controlled inputs and lifts state up to the ExpensesPage component to add new items to the main list.

Functional List Management: The application uses JavaScript array methods (.map, .filter, .reduce) to dynamically render the list, calculate totals, and delete items.

React Router DOM: Used to create simple, fast navigation between the "Home" page and the main "My Expenses" page without full page reloads.

🚧 Limitations and Future Scope
This is an MVP (Minimum Viable Product) focused on core requirements. As a next step, the following features would be implemented to make it a production-ready application:

Limitations (Current Implementation)
Prop Drilling: The delete functionality involves prop drilling through the ExpenseList component to reach the ExpenseItem. This was a conscious choice for clarity in a small project.

No Persistence: Currently, the data is stored only in the browser's memory (React State). If the browser tab is closed or the page is refreshed, all data is lost.

Future Scope
Context API Refactoring: Refactor the expense state and handlers (add, delete) using the React Context API to eliminate prop drilling and provide cleaner access to data throughout the component tree.

Data Persistence: Implement a simple local storage solution (using localStorage) or integrate a backend (like Firebase or a mock REST API) to ensure data is saved permanently.

Advanced Filtering: Add the ability to filter by Date Range or Year for more granular tracking.

Data Visualization: Implement the optional requirement by adding a Chart Component (e.g., using Recharts) to visually summarize expenses per category.
