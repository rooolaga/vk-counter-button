import { ButtonHTMLAttributes, useState } from "react";
import clsx from 'clsx';
import { ButtonContext } from "./ButtonContext"
import { Counter } from "./Counter/Counter";
import { Text } from "./Text/Text";
import cls from './Button.module.css'

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    size = 'medium',
    variant = 'primary',
    children
  } = props;

  const [count, setCount] = useState(0);

  const clsNames = clsx(
    cls.button,
    cls[size],
    cls[variant],
    className,
  )

  const handleOnChange = () => {
    console.log(1);
    setCount(prev => prev + 1);
  }

   return (
     <ButtonContext.Provider value={{count}}>
        <button onClick={handleOnChange} className={clsNames}>{children}</button>
     </ButtonContext.Provider>
   );
}


Button.Counter = Counter;
Button.Text = Text;
