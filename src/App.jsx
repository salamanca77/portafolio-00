import { useState } from 'react'
import { Sidenav } from './components/Sidenav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidenav />      
    </>
  )
}

export default App
