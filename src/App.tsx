import ExpenseList from "./expense-tracker/components/ExpenseList";



function App() {
  //dummy data for testing
  const expenses = [
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 2, description: 'bbb', amount: 20, category: 'Utilities'},
    {id: 3, description: 'ccc', amount: 30, category: 'Utilities'},
    {id: 4, description: 'ddd', amount: 40, category: 'Utilities'},
  ]

  return (
    <div>
      <ExpenseList expenses={ expenses } onDelete={(id) => console.log('Delete', id)}/>
    </div>
  );
}
export default App;