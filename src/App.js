import React from 'react';
import './App.css';

function App() {
  const todos = ["Go to market", "Buy food", "Make dinner"];
  return (
    <div className="App">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
