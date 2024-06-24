import { useCart } from '../contexts/CartContext';
import styles from './Cart.module.css';

export default function Cart() {
  const cart = useCart();

  const total = cart.items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.cart}>
      <h2 className={styles.cartTitle}>Cart</h2>
      <p className={styles.cartItems}>Items: 2</p>

      <div className={styles.cartItems}>
        {cart &&
          cart.items.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <h3 className={styles.cartItemTitle}>{item.title}</h3>
              <p className={styles.cartItemPrice}>Price: {item.price} €</p>

              <button
                className={styles.cartItemButton}
                onClick={() =>
                  cart.setItems(cart.items.filter((_, i) => i !== index))
                }
              >
                Remove
              </button>
            </div>
          ))}
      </div>

      <p className={styles.cartTotal}>Total: {total} €</p>
    </div>
  );
}
