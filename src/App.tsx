import { Button } from "./components/Button/Button";

function App() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '20px',
      width: '150px',
    }}>
      <Button size='large' variant={"secondary"}>
        <Button.Label>Скажи как мне быть, если нет стимула</Button.Label>
        <Button.Counter />
      </Button>
      <Button size='large'>
        <Button.Label>Скажи как мне быть, если нет стимула</Button.Label>
        <Button.Counter />
      </Button>
    </div>
  )
}

export default App
