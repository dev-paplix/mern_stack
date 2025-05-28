import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function Home() {
  return <h2>Home Page</h2>
}

function About() {
  return <h2>About Page</h2>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;
