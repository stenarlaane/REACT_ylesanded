import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './components/ExpenseItem'

const App = () => {

  const data = {
    date: new Date(2024, 10, 12),
    title: "New book",
    price: 30.99
  }

  return (
    <div className="App">
    <ExpenseItem data={data}/>
    </div>
  );
}

export default App
