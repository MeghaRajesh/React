import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hello } from './components/Hello'
import { CounterApp } from './components/CounterApp'
import { Book } from './components/Book'
import { useBookHook } from './hooks/BookHook'
import { LoginForm } from './components/LoginForm'
import { Window } from './components/window'

export const bookContext=createContext();
function App() {
  const [count, setCount] = useState(0)
  const bookData=useBookHook();
  return (
    <>
      <div>
        {/* <Hello/> */}
        {/* <CounterApp/> */}
        {/* <bookContext.Provider value={bookData}>
          <Book/>
        </bookContext.Provider > */}
        {/* <LoginForm/> */}
        <Window/>
      </div>
    </>
  )
}

export default App
