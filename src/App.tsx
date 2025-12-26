import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import WhyUs from './pages/WhyUs'
import Service_1 from './pages/Service_1'
import Service_2 from './pages/Service_2'
import Service_3 from './pages/Service_3'
import Service_4 from './pages/Service_4'
import Service_5 from './pages/Service_5'
import Service_6 from './pages/Service_6'
import Gallery from './pages/Gallery'
import FAQS from './pages/FAQS'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/services" element={<Service_1 />} />
          <Route path="/service-2" element={<Service_2 />} />
          <Route path="/service-3" element={<Service_3 />} />
          <Route path="/service-4" element={<Service_4 />} />
          <Route path="/service-5" element={<Service_5 />} />
          <Route path="/service-6" element={<Service_6 />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQS />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App