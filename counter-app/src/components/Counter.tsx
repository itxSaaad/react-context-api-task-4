import { useContext } from 'react';

import { CounterContext } from '../contexts/Counter';
import styles from './Counter.module.css';

export default function Counter() {
  const counterContext = useContext(CounterContext);

  return (
    <div className={styles.counter}>
      <button
        className={styles.buttonInc}
        onClick={() => counterContext.setCount(counterContext.count + 1)}
      >
        Increment
      </button>
      <button
        className={styles.buttonDec}
        onClick={() => counterContext.setCount(counterContext.count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}
