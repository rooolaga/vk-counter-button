import { Button } from "./components/Button/Button";

function App() {

  return (
    <div style={{
      display: 'flex',
      columnGap: '20px'
    }}>
      <Button size='small'>
        <Button.Text>Скажи как мне быть, если нет стимула</Button.Text>
        <Button.Counter />
      </Button>

      <Button>
        <Button.Text>Скажи как мне быть, если нет стимула</Button.Text>
        <Button.Counter />
      </Button>

      <Button variant='secondary'>
        <Button.Text>secondary</Button.Text>
        <Button.Counter />
      </Button>

      <Button variant='secondary' size='large'>
        <Button.Text>secondary</Button.Text>
        <Button.Counter />
      </Button>
    </div>
  )
}

export default App
