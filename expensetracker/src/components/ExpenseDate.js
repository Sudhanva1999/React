import './ExpenseDate.css'
import Card from './Card'

function ExpenseDate(props) {
    const month = props.dateData.toLocaleDateString('en-US', {month: 'long'});
    const day = props.dateData.toLocaleDateString('en-US', { day: '2-digit'});
    const year = props.dateData.toLocaleDateString('en-US', {year: 'numeric'});

    return (
    <Card className='dateItem'>
        <div className='monthCss'>{ month }</div>
        <div className='dayCss'>{ day }</div>
        <div className='yearCss'>{ year }</div>

    </Card>

    );

}

export default ExpenseDate;
