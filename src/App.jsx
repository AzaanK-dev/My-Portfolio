import { BrowserRouter } from "react-router-dom";
import { About, CurrentlyLearn, Contact, Education, Experience, Skills, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        
        <div className="bg-hero-pattern bg-cover">
          <Navbar />
          <Hero />

        </div>

        <About />

        <div className="relative z-10">
          <Skills />
        </div>

        <Tech />
        <CurrentlyLearn />

        <Experience/>
        <Works />
        
        <Education />

        <div className="relative z-0">
          <StarsCanvas />  
          <Contact />
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
