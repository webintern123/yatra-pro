// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Land from "./components/Land";
import Land1 from "./components/Land1";
import Land2 from "./components/Land2";
import Hero from "./components/Hero";
import Land3 from "./components/Land3";
import Land4 from "./components/Land4";
import Land6 from "./components/Land6";
import Land7 from "./components/Land7";
import Land8 from "./components/Land8";
import Land9 from "./components/Land9";
import Land10 from "./components/Land10";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/land" element={<Land/>} />
        <Route path="/land1" element={<Land1/>} />
        <Route path="/land2" element={<Land2/>}/>
        <Route path="/land3" element={<Land3/>} />
        <Route path="/land4" element={<Land4/>} />
        <Route path="/hero" element={<Hero/>} />
        <Route path="/land6" element={<Land6/>}/>
        <Route path="/land7" element={<Land7/>}/>
        <Route path="/land8" element={<Land8/>}/>
         <Route path="/land9" element={<Land9/>}/>
          <Route path="/land10" element={<Land10/>}/>
        
        
        

        {/* add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
