import cls from './Text.module.css'

export const Text = ({children}) => {

  return (
    <span className={cls.text}>{children}</span>
  );
}
