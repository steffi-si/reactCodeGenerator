import { useState } from 'react';
import './App.css';
import QuoteGenerator from './components/QuoteGenerator.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuoteGenerator />
    </>
  )
}

export default App