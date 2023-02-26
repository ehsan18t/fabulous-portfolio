import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* NAV */}
        <Nav />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home title="Home Page" />} />
          <Route path="/about" element={<About title="ABout Page" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
