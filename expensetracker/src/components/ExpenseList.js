import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
function ExpenseList() {
    const expenseData = {
        0: {
            date: new Date("2015-03-25"),
            item: "Car",
            price: 5000,
        },
        1: {
            date: new Date("2015-05-25"),
            item: "Goat",
            price: 2000,
        },
        2: {
            date: new Date("2015-07-25"),
            item: "Pen",
            price: 20,
        }
    }
    return (
        <div className='expenseList'>
            <ExpenseItem expenseData = {expenseData[0]} />
            <ExpenseItem expenseData = {expenseData[1]} />
            <ExpenseItem expenseData = {expenseData[2]} />
        </div>
    );
}

export default ExpenseList;
