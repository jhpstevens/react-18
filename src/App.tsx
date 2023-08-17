import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import categories from './expense-tracker/categories';

function App() {
  //dummy data for testing
  const [selectedCategory, setSelectedCategory] = useState('');
  const expenses = [
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 20, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 30, category: 'Groceries' },
    { id: 4, description: 'ddd', amount: 40, category: 'Utilities' },
  ];

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => console.log('Delete', id)}
      />
    </div>
  );
}
export default App;
