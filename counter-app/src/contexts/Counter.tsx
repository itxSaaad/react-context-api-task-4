interface CounterProviderProps {
  children: React.ReactNode;
}

interface CounterContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

import { createContext, useState } from 'react';

export const CounterContext = createContext({} as CounterContextProps);

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
