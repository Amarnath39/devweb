import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showMessage, setShowMessage] = useState(true)
  const [name, setName] = useState("")

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React Demo App 🚀</h1>

      <div className="card">
        {/* Counter */}
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>

        <br /><br />

        {/* Toggle Message */}
        <button onClick={() => setShowMessage(!showMessage)}>
          Toggle Message
        </button>

        {showMessage && (
          <p>🎉 React State is working perfectly!</p>
        )}

        <br />

        {/* Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {name && <p>Hello, <strong>{name}</strong> 👋</p>}
      </div>

      <p className="read-the-docs">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  )
}

export default App
