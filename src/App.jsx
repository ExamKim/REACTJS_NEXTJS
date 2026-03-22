import { useState } from 'react'
import './App.css'
import Bai1 from './assets/Bai1'
import Bai2 from './assets/Bai2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Bai1 /> */}
      <Bai2 />
    </>
  )
}

export default App
