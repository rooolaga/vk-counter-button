import { useButtonContext } from "../ButtonContext";

import cls from './Counter.module.css';

export const Counter = () => {
  const {count} = useButtonContext();

  return (
    <div className={cls.counter}>{count}</div>
  );
}
