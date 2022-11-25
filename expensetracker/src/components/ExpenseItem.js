import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

function ExpenseItem(props) {
    

    return (
        <Card className='expenseItem'>
            <ExpenseDate dateData = { props.expenseData.date } />
            <div className='item'>
                { props.expenseData.item }
            </div>
            <div className='price'>
                ${ props.expenseData.price }
            </div>
        </Card>
    );
}

export default ExpenseItem;