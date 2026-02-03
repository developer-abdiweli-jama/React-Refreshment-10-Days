import { useState } from 'react'
import './App.css'

/**
 * App component for Day 3 of the React refreshment course.
 * Demonstrates basic state management using the useState hook.
 */
function App() {
  // Define state for a simple counter
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Button to increment the counter state */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
