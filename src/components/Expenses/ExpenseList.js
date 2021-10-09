import React from 'react';
import ExpenseItems from './ExpenseItems';
import './ExpenseList.css';

const ExpenseList = props => {

    if(props.items.length === 0 ){
        return <h2 className='expenses-list__fallback'>Found no expense</h2>
    }
  
    return( <ul className = "expenses-list" >
        {props.items.map((x) => (
        <ExpenseItems 
        key = {x.id}
        title={x.title} 
        amount={x.amount} 
        date={x.date} />
      ))}
    </ul>
    
    );
    

}

export default ExpenseList;