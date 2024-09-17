import './App.scss'

import { Route, Routes } from 'react-router-dom'

import Header from './components/blocks/Header/Header'
import Footer from './components/blocks/Footer/Footer'

import Main from './page/Main/Main'
import AboutUs from './page/AboutUs/AboutUs'


function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<AboutUs/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
