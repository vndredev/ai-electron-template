import { useState, useEffect } from 'react'
import './App.css'
// Types are automatically available from src/types/electron.d.ts

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    window.electronAPI.onMainProcessMessage((msg: string) => {
      setMessage(msg)
    })
  }, [])

  return (
    <div className="App">
      <div className="card">
        <h1>AI Electron Template</h1>
        <p>Electron + Vite + React + TypeScript</p>
        {message && <p>Main process message: {message}</p>}
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/renderer/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
