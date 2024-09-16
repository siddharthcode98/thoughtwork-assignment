const DisplayExpenses = () => {
  const listOfExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  console.log(listOfExpenses);
  return (
    <div>
      <ul>
        {listOfExpenses.map((item) => (
          <li>
            <p>{item.amount}</p>
            <p>{item.description}</p>
            <p>{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayExpenses;
