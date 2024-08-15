import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import Users from "./pages/Users/Users"
import Products from "./pages/Products/Products"
import NotFound from './pages/NotFound/NotFound'
import About from "./pages/About/About"
function App() {

  return (
    <main className='flex w-screen h-screen overflow-y-auto'>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Users/>} />
      <Route path='/products' element = {<Products/>} />
      <Route path='/about/:id' element = {<About/>} />
      <Route path='*' element = {<NotFound/>} />
    </Routes>
    </main>
  )
}

export default App
