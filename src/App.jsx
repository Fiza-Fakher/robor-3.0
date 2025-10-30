
import './index.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/extra/Loader'

import Home from './pages/home'
import About from './pages/about/index'
import AiConsulting from './pages/ai-consulting/index'
import BlogPage from './pages/blog/index'
import BlogDetail from './pages/blog-detail/index'
import Contact from './pages/contact/index'
import Projects from './pages/projects/index'
import ProjectDetail from './pages/project-detail/index'
import Service from './pages/service/index'
import ServiceDetail from './pages/service-detail/index'
import Team from "./pages/team/index"

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Show loader for a short time whenever route changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 4000); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
     {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-[var(--primary)]">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/team" element={<Team/>} />
            <Route path="/ai-consulting" element={<AiConsulting />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
