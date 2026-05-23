import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import UserList from './components/UserList'
import SearchBox from './components/SearchBox'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductList />
      <UserList />
      <SearchBox />
      <Counter />
    </>
  )
}

export default App
