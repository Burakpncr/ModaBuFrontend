import React from 'react'
import Header from '../Header/index'
import About from '../Section/About'
import Section from '../Section/index'
import Featured from '../Section/Featured/index'
import Services from '../Section/Services/index'
import Footer from '../Footer/index'
function HomePage() {
  return (
    <div>
      <Header />
      <Section />
      <About />
      <Featured />
      <Services />
      <Footer />
    </div>
  )
}
export default HomePage