import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


 const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased 
      selection:bg-cyan-300 selection:text-cyan-900"></div>
      <div className="fixed top-0 -z-10 w-full">
         <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
       <Navbar/>
       <Hero/>
       <About/>
       <Technologies/>
       <Experience/>
       <Projects/>
       <Contact/>
      </div>
    </div>
    
    
  );
};

export default App;
