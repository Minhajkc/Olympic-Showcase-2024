import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AthleteSpotlight from './Components/AthleteSpotlight';
import EventSummary from './Components/EventSummary';


function App() {
  return (
    <div className="App ">
      <Navbar />
      <HeroSection />
      <AthleteSpotlight />
      <EventSummary />
    </div>
  );
}

export default App;