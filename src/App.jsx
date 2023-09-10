
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Home from './pages/home'
import Shop from './pages/shop'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element ={<Home/>}/>
          <Route path ='shop' element={<Shop />}/>
            <Route path='blog' element={<Blog />}/>
              <Route path='about' element={<About/>}/>
              <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
