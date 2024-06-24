import styles from './Cart.module.css';

export default function Cart() {
  return (
    <div className={styles.cart}>
      <h2 className={styles.cartTitle}>Cart</h2>
      <p className={styles.cartItems}>Items: 2</p>

      <div className={styles.cartItems}>
        <div className={styles.cartItem}>
          <h3 className={styles.cartItemTitle}>T-shirt</h3>
          <p className={styles.cartItemPrice}>Price: 10 €</p>
          <button className={styles.cartItemButton}>Remove</button>
        </div>
        <div className={styles.cartItem}>
          <h3 className={styles.cartItemTitle}>Shoes</h3>
          <p className={styles.cartItemPrice}>Price: 20 €</p>
          <button className={styles.cartItemButton}>Remove</button>
        </div>
      </div>

      <p className={styles.cartTotal}>Total: 30 €</p>
      <button className={styles.cartCheckoutButton}>Checkout</button>
    </div>
  );
}
