import { Button } from "./components/Button/Button";
import cls from './App.module.scss'

function App() {

  return (
    <div className={cls.app}>
      <Button size='large'>
        <Button.Label>Скажи как мне быть, если нет стимула</Button.Label>
        <Button.Counter />
      </Button>
      <Button size='large' variant={"secondary"}>
        <Button.Label>Скажи как мне быть, если нет стимула</Button.Label>
        <Button.Counter />
      </Button>
    </div>
  )
}

export default App
