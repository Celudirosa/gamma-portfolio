import { Route, Routes } from 'react-router-dom'
import Home from './views/home/Home'
import './scss/global.scss'

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App
