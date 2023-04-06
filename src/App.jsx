import Home from './pages/home/Home'
import About from './pages/about/About'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Projects from './pages/projects/Projects'
import Blog from './pages/blog/Blog'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* NAV */}
        <Nav />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home title="Home Page" />} />
          <Route path="/about" element={<About title="About Page" />} />
          <Route path="/projects" element={<Projects title="Projects" />} />
          <Route path="/blog" element={<Blog title="Blog" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
