import React from 'react'
import Overview from './components/Overview'
import Navbar from './components/common/Navbar'
import Analysis from './components/Analysis'
import About from './components/About'
import Home from './components/Home'
import Outcome from './components/Outcome'
import Future from './components/Future'


function App() {
  return <>
  <div className="flex flex-col">
      
      <Navbar />
      <section id="home" className="h-[100vh] scroll-mt-20">
        <Home />
      </section>

      <section id="about" className="h-[100vh] scroll-mt-22">
        <About />
      </section>

      <section id="overview" className="h-[195vh] scroll-mt-22">
        <Overview />
      </section>

      <section id="analysis" className="h-[310vh] scroll-mt-22">
        <Analysis />
      </section>

      <section id="outcome" className="h-[100vh] scroll-mt-20">
        <Outcome />
      </section>

      <section id="future scope" className="h-[100vh] scroll-mt-20">
        <Future />
      </section>
    </div>
  </>
}

export default App
