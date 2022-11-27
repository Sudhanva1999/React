import logo from './logo.svg';
import './App.css';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <div>
      <AddExpense />
      <ExpenseList />
    </div>
  );
}

export default App;
