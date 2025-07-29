import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './components/Project.jsx';
import Skills from './components/Skills.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';

const Routepages = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home/>}></Route>
            <Route path = '/home' element={<Home/>}></Route>
            <Route path = '/experience' element={<Experience/>}></Route>
            <Route path = '/about' element={<About/>}></Route>
            <Route path = '/skills' element={<Skills/>}></Route>
            <Route path = '/footer' element={<Footer/>}></Route>
            <Route path = '/project' element={<Project/>}></Route>
        </Routes>
    
    </BrowserRouter>
  )
}

export default Routepages