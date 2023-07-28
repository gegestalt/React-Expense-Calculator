//importing our custom component which is the ExpenseItem
import ExpenseItem from "./Components/ExpenseItem";
//when we import this, we can use it like a HTML element.
function App() {
  const expenses = [
    {
      id: "e1",
      title: "DJI Mavic 3 Pro Fly More Combo (DJI RC) - Drone",
      amount: 2919,
      date: new Date(2023, 3, 26),
    },
    {
      id: "e2",
      title: "Hair Transplant",
      amount: 399.49,
      date: new Date(2023, 2, 27),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 4, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 5, 29),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
