import './App.scss'

import { Route, Routes } from 'react-router-dom'

import Header from './components/blocks/Header/Header'
import Footer from './components/blocks/Footer/Footer'

import Main from './page/Main/Main'
import AboutUs from './page/AboutUs/AboutUs'
import Reservation from './page/Reservation/Reservation'
import Contacts from './page/Contacts/Contacts'
import Menu from './page/Menu/Menu'


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
        </Routes>
      <Footer/>
    </>
  )
}

export default App
