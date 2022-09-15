import './App.css';
import React, {useEffect, useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Exchange from './components/Exchange';
import Main from './components/Main';
import Calculate from './components/Calculate';
import Coins from './components/Coins';
import Sentiment from './components/Sentiment';
import Statistics from './components/Statistics';
import Profit from './components/Profit';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import Footers from './components/Footers';
import Hamburger from './components/Hamburger';


function App() {

  const [open, setOpen] = useState(false)

    const openHamburger = () => {
        setOpen(true)
        console.log('open')
    }

    const closeHamburger = () => {
      setOpen(false)
      console.log('close')
  }


  useEffect(() => {
    
    AOS.init()

  }, [])
  

  return (

    <div>
        {open ? <Hamburger style={{backgroundColor: 'red'}} closeHamburger= {closeHamburger}/> : 
     
     (<div className='app'>
     <Nav openHamburger= {openHamburger}/>
     <Hero/>
     <Exchange/>
     <Main/>
     <Calculate/>
     <Coins/>
     <Sentiment/>
     <Statistics/>
     <Profit/>
     <NewsLetter/>
     <Footer/>
     <Footers/>
     
   </div>)
 
 }

    </div>

    
  );
}

export default App;
