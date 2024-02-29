import { useEffect, useState } from 'react'
import reactLogo from '@/shared/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getBrands } from '@/features/brands/api/getBrands'

function App() {
  const [count, setCount] = useState(0)

  async function get(){
    const brands = await getBrands();
    console.log(brands);
  }

  useEffect(()=> {
    get();
  })

  console.log(new Date().getTimezoneOffset()/60);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        {JSON.stringify(import.meta.env)}
      </p>
    </>
  )
}

export default App
