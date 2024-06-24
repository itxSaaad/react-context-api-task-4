import { useContext } from 'react';

import { CounterContext } from '../contexts/Counter';
import styles from './Counter.module.css';

export default function Counter() {
  const counterContext = useContext(CounterContext);

  return (
    <div className={styles.counter}>
      <button
        className={styles.buttonInc}
        onClick={() => console.log('Increment')}
      >
        Increment
      </button>
      <button
        className={styles.buttonDec}
        onClick={() => console.log('Decrement')}
      >
        Decrement
      </button>
    </div>
  );
}
