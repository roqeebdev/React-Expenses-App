import React from "react";
import './ExpenseItems.css';
import '../Expenses/ExpenseDate';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';


const ExpenseItems = (props) => {
  
  // const [title, setTitle] = useState(props.title)
  
  // //let title = props.title;

  // const clickHandler = () => {
  //   setTitle('updated');
  //   console.log(title);
  // }

  return (
    
    <Card className="expense-item">
        <ExpenseDate dates={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">N{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}></button> */}
    </Card>
  );
}

export default ExpenseItems;
