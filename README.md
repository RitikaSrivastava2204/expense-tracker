# 💰 Expense Tracker App: Penthara Technologies Assignment

**Live Demo:** [Click Here to View the App on Netlify!] https://expense-trackerdemo.netlify.app/

This is a minimal, clean, and efficient **Expense Tracker** application built using **React** and **Vite** as a technical assignment for Penthara Technologies. The application is designed to demonstrate strong component architecture and frontend data flow principles.

## 🚀 Getting Started

The project uses modern tools (Vite) and standard practices. To run the application locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/RitikaSrivastava2204
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd expense-tracker 
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```

The application will open in your browser, typically at `http://localhost:5173`.

---

## ✨ Technical Concepts & Implementation

The project was structured to align with the assignment's best practices and showcase key React principles.

### 1. Architecture and Best Practices

* **Code Separation of Concerns:** Logic is strictly separated from the UI. Initial data and filtering functions reside in the dedicated **`src/services/ExpenseService.js`** file.
* **Component Structure:** The file structure strictly adheres to the requested best practices, utilizing dedicated folders for `components/`, `pages/`, and `services/`.
* **UI/UX:** Styling prioritizes a minimal and aesthetic look, utilizing the **Poppins font** and displaying amounts in **Indian Rupees (₹)** (`INR`).

### 2. React Functionality & Data Flow

* **State Management:** Core data is managed using the **`useState` hook** within the parent `ExpensesPage`.
* **Data Flow:** New items are added using the **"Lifting State Up"** pattern (from `ExpenseForm` to `ExpensesPage`). Deletion is handled immutably using JavaScript's `.filter()` method.
* **Dynamic Filtering & Summary:** The expense list is dynamically filtered by **Category**. The total expense for the selected category is calculated and displayed live.
* **Routing:** **React Router DOM** is used for single-page navigation between the Home page and the Expenses page.

---

## 🚧 Limitations and Future Scope

This is an MVP focused on demonstrating core requirements. For a production environment, the following would be addressed:

### Limitations (Current Implementation)

* **Prop Drilling:** The delete functionality involves **prop drilling** through the `ExpenseList` component to reach the `ExpenseItem`.
* **No Persistence:** Data is stored only in the browser's memory (`useState`) and is lost upon refresh.

### Future Enhancements

1.  **Context API Refactoring:** Refactor the expense state and handlers using the **React Context API** to manage global state and eliminate prop drilling.
2.  **Data Persistence:** Integrate **`localStorage`** or set up a simple mock API to save user data permanently.
3.  **Data Visualization:** Implement the optional requirement by adding a **Chart Component** (e.g., using Recharts) to visually summarize spending.
4.  **Advanced Filtering:** Add filtering by **Date Range** or **Year**.