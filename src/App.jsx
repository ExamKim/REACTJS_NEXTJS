import { useEffect } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ThemeToggle from './components/ThemeToggle'
import { useRecoilValue } from 'recoil'
import { themeAtom } from './atom/ThemeAtom'
import AuthPanel from './components/AuthPanel'
import UserBadge from './components/UserBadge'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const theme = useRecoilValue(themeAtom)

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Recoil Practice</h1>
        <UserBadge />
      </header>

      <div className='grid'>
        <section className='card'>
          <h2>Bai 1: Counter Global</h2>
          <ComponentA />
          <ComponentB />
        </section>

        <section className='card'>
          <h2>Bai 2: Theme Toggle</h2>
          <ThemeToggle />
        </section>

        <section className='card'>
          <h2>Bai 3: Auth gia lap</h2>
          <AuthPanel />
          <UserBadge />
        </section>

        <section className='card'>
          <h2>Bai 4: Todo List Global</h2>
          <TodoInput />
          <TodoList />
        </section>
      </div>
    </div>
  )
}

export default App
