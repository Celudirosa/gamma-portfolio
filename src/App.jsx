import { Route, Routes } from 'react-router-dom'
import Home from './views/home/Home'
import Error404 from './views/error404/Error404'
import './scss/global.scss'

function App() {

  // CHANGE PAGE TITLE
  // Detect when the user changes tabs
  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      // The user is in another tab
      document.title = "I miss u 🥲"; // Change the tab title
    } else {
      // The user returned to the current tab
      document.title = "Celudirosa"; // Restore the original title
    }
  });


  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </main>
    </>
  )
}

export default App
