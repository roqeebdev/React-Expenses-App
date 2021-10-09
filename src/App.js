//import "./App.css";
import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
    {
      id: "e1 ",
      title: "Toilet Paper",
      amount: 245,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Sachet Paper",
      amount: 845,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e3",
      title: "New Paper",
      amount: 765,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e4",
      title: "Old Paper",
      amount: 900,
      date: new Date(2020, 7, 14),
    },
  ];


const App = () => {
  const [expenses, setExpense] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    // setExpense([expense, ...expenses]) not best way to update  due  to previous data
    setExpense((prevExpenses => {
      return [expense, ...prevExpenses];
    }))
  };

  return (
    <div>
      <NewExpense onSaveExpense={addExpenseHandler} />
      <Expense items = {expenses}/>
    </div>
  );
}

export default App;
