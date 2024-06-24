interface ItemProps {
  title: string;
  price: number;
}

import styles from './Item.module.css';

export default function Item({ title, price }: ItemProps) {
  return (
    <div className={styles.itemCard}>
      <h2 className={styles.itemTitle}>{title}</h2>
      <p className={styles.itemPrice}>Price: {price} €</p>
      <button className={styles.itemButton}>Add to cart</button>
    </div>
  );
}
