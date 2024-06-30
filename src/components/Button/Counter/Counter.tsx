import { useEffect, useRef } from "react";
import { clsx } from "clsx";
import { useButtonContext } from "../ButtonContext";
import cls from './Counter.module.scss';

export const Counter = () => {
  const {count, size, variant} = useButtonContext();
  const counterRef = useRef<HTMLSpanElement | null>(null);

  const handlePulseAnimation = (duration) => {
    const pulse = document.createElement('span');
    pulse.classList.add(cls.pulse)
    counterRef.current?.appendChild(pulse);
    pulse.classList.add(cls.active)

    const timeout = setTimeout(() => {
      pulse.remove()
      clearTimeout(timeout)
    }, duration)
  }

  useEffect(() => {
    handlePulseAnimation(1000);
  }, [count]);

  const clsNames = clsx(
    cls.counter,
    cls[size],
    cls[variant],
  )

  return (
    <span className={clsNames} ref={counterRef}>
      {count <= 99 ? count : '99+'}
    </span>
  );
}
