import './AddExpense.css'

function AddExpense() {
    return (
        <div className='addExpenseForm'>
            <form>
                <div>
                    <input className='inputItemCss' placeholder='TITLE' type= 'text' />
                    <input className='inputItemCss' placeholder='PRICE' type='number' />
                    <input className='inputItemCss' placeholder='DATE' type='date' /> 
                </div>
                <div class="break"></div>
                <button> Add Item </button>
            </form>
            
        </div>
    );

}

export default AddExpense;