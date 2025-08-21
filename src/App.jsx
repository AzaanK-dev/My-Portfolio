import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Skills, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        <About />

        <div className='relative z-10'>
          <Skills />
        </div>

        <Works />
        <Education />

        <div className='relative z-0'>
          <StarsCanvas />  
          <Contact />
        </div>

        <div className='relative z-10'>
          <Tech />
          <Footer /> 
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;
