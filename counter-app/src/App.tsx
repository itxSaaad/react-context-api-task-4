import { useContext } from 'react';

import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './contexts/Counter';

function App() {
  const counterState = useContext(CounterContext);

  return (
    <header className="container">
      <h1>Counter is {counterState.count}</h1>

      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </header>
  );
}

export default App;
