import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (newChanges) => {
    setFilteredYear(newChanges);
  };


  const filteredExpenses = props.items.filter((x) => {
    return x.date.getFullYear().toString() === filteredYear;
  });


  return (
    <list>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          dropDownFilter={filterChangeHandler}
        />
        {/* map of each expense items */}
        {/* {expenseContent} */}
        <ExpenseList items = {filteredExpenses}/>

        {/* expenseitems before converted to map  */}
        {/* <ExpenseItems
    date={props.items[0].date}
    amount={props.items[0].amount}
    title={props.items[0].title}
  ></ExpenseItems>
  <ExpenseItems
    date={props.items[1].date}
    amount={props.items[1].amount}
    title={props.items[1].title}
  ></ExpenseItems>
  <ExpenseItems
    date={props.items[2].date}
    amount={props.items[2].amount}
    title={props.items[2].title}
  ></ExpenseItems>
  <ExpenseItems
    date={props.items[3].date}
    amount={props.items[3].amount}
    title={props.items[3].title}
  ></ExpenseItems> */}
      </Card>
    </list>
  );
}

export default Expense;
