import { createContext, useContext } from "react";

export const ButtonContext = createContext();

export const useButtonContext = () => {
  const context = useContext(ButtonContext);

  if(!context) {
    throw new Error('Этот компонет должен быть использован внутри Button')
  }

  return context;
}
