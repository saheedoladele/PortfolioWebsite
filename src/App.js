
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/ContactMe/Contact';
import Header from './Components/Header/Header';
import Resume from './Components/Resume/Resume';
import Testimony from './Components/Testimony/Testimony';

function App() {
  return (
    <div className="App">
      <Header />
     <div className="container">
      <AboutMe />
      <Resume />
      <Contact />
       {/*
      <Testimony />
       */}
     </div>

    </div>
  );
}

export default App;
