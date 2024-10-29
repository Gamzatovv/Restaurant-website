import './App.scss'

import { Route, Routes } from 'react-router-dom'

import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'

import Main from './page/Main/Main'
import AboutUs from './page/AboutUs/AboutUs'
import Reservation from './page/Reservation/Reservation'
import Contacts from './page/Contacts/Contacts'
import Menu from './page/Menu/Menu'
import Cart from './page/Cart/Cart'


function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Reservation" element={<Reservation/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
