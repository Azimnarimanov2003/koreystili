import { useState } from 'react'


import './App.css'
import Navbar from './Companentis/Navbar/Navbar'
import Header from './Companentis/Navbar/Header/Header'
import Section from './Companentis/Navbar/Section/Section'
import Wrapper from './Companentis/Navbar/Wrapper/Wrapper'
import Sidebar from './Companentis/Navbar/Sidebar/Sidebar'
import Content from './Companentis/Navbar/Content/Content'
import Hero from './Companentis/Navbar/Hero/Hero'
import Card from './Companentis/Navbar/Card/Card'
import Gallery from './Companentis/Navbar/Gallery/Gallery'
import Entery from './Companentis/Navbar/Entery/Entery';
import Footer from './Companentis/Navbar/Footer/Footer'



function App() {
  


  return (
    <>
    <div className="div">
    <Navbar/>
    <Header/>
    <Section/>
    <Wrapper/>
    <Sidebar/>
    <Content/>
    <Hero/>
    <Card/>
    <Gallery/>
    <Entery/>
    <Footer/>
    </div>
    </>
  )
}

export default App
