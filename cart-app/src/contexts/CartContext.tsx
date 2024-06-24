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

import { createContext, useState } from 'react';

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItemType[]>([
    {
      price: 100,
      title: 'Shoes',
    },
    {
      price: 200,
      title: 'Shirt',
    },
  ]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
