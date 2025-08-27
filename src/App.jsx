import gsap from 'gsap';
import './App.css'
import { Navbar } from './Components/Navbar'
import HeroSection from './Sections/HeroSection';
import { ScrollTrigger } from "gsap/all"; 
import MessageSection from './Sections/MessageSection';
import FlavorSection from './Sections/FlavorSection';

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <section>
      <Navbar/>
      <HeroSection/>
      <MessageSection />
      <FlavorSection />
      <div className='h-dvh border border-red-500'></div>
    </section>
  )
}

export default App
