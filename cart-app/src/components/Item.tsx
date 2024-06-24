interface ItemProps {
  title: string;
  price: number;
}

import { useCart } from '../contexts/CartContext';
import styles from './Item.module.css';

export default function Item({ title, price }: ItemProps) {
  const cart = useCart();

  return (
    <div className={styles.itemCard}>
      <h2 className={styles.itemTitle}>{title}</h2>
      <p className={styles.itemPrice}>Price: {price} €</p>
      <button
        className={styles.itemButton}
        onClick={() => cart.setItems([...cart.items, { title, price }])}
      >
        Add to cart
      </button>
    </div>
  );
}
