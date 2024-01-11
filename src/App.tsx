
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ThemeState } from './store/themeSlice'

function App() {

  const isDarkMode = useSelector<ThemeState>(state => state.isDarkMode);
  const theme = isDarkMode ? "dark" : "light"

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    // <ThemeProvider>
      <BrowserRouter>
        {/* navbar */}
        <Navbar />
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    // </ThemeProvider>
  )
}

export default App
