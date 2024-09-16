import { useState } from "react";

const InputForm = () => {
  const [description, setDiscription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date("now"));

  const [expenseObject, setExpenseObj] = useState({});

  const [expensesList, setExpensesList] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();
    const expenseObj = {
      amount: amount,
      description: description,
      date: date,
    };
    let randomList = [...expensesList, expenseObj];
    setExpensesList(randomList);
    localStorage.setItem("expenses", JSON.stringify(randomList));
  };
  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          onChange={(event) => setDiscription(event.target.value)}
        />
        <input
          type="text"
          onChange={(event) => setAmount(event.target.value)}
        />
        <input type="date" onChange={(event) => setDate(event.target.value)} />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
