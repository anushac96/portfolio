import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <Hero />
      {/* <Projects /> */}  //TODO: Uncomment when Projects component is ready
      {/* <Skills /> */}  //TODO: Uncomment when Skills component is ready
      {/* <Experience /> */}  //TODO: Uncomment when Experience component is ready
      {/* <Contact /> */} // TODO: Uncomment when Contact component is ready
      {/* <Footer /> */}  //TODO: Uncomment when Footer component is ready
    </div>
  );
}

export default App;