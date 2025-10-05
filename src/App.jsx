import gsap from 'gsap';
import './App.css'
import { Navbar } from './Components/Navbar'
import HeroSection from './Sections/HeroSection';
import { ScrollSmoother, ScrollTrigger } from "gsap/all"; 
import MessageSection from './Sections/MessageSection';
import FlavorSection from './Sections/FlavorSection';
import { useEffect } from 'react';
import NutritionSection from './Sections/NutritionSection';
import BenefitSection from './Sections/BenefitSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {

  useEffect(()=>{
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    })
  });

  return (
    <section>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar/>
          <HeroSection/>
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
        <BenefitSection />
          <div className='h-dvh border border-red-500'></div>
          
        </div>
      </div>
    </section>
  )
}

export default App
