import { useState } from 'react'

import './App.css'
import PokémonCard from './components/PokémonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PokémonCard />
      </div>
    </>
  )
}

export default App
