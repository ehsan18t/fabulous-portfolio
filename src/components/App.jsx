import { useState } from 'react'
import reactLogo from '../assets/img/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex justify-center">
        <div className="text-3xl font-bold underline">
          TailwindCSS Integration Test
        </div>
      </div>
    </div>
  )
}

export default App
