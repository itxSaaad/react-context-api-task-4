interface CartProviderProps {
  children: React.ReactNode;
}

interface CartItemType {
  price: number;
  title: string;
}

interface CartContextProps {
  items: CartItemType[];
  setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}

import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({} as CartContextProps);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItemType[]>([
    {
      price: 10,
      title: 'T-shirt',
    },
    {
      price: 5,
      title: 'Hat',
    },
  ]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
