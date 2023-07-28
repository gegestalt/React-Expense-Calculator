//Injecting the css styling, it's not automatically done
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US',{month: 'long'});
  const day = props.date.toLocaleString('en-US',{day: '2-digit'});
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
//We have to export this file inorder to use it.
export default ExpenseItem;
//props.title the .title is getting the name from the naming on App.js
