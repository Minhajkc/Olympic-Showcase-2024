import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faMedal, faSwimmer, faRunning } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date("2024-08-11") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  return (
    <section className="bg-gradient-to-r from-[#000000] via-[#0591bf] to-[#000000] text-white py-20 font-sans carousel-bgg">
      <div className="container mx-auto text-center">
        <img 
          src="https://ca-times.brightspotcdn.com/dims4/default/1611a9c/2147483647/strip/true/crop/5461x3641+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb1%2F38%2F7451aceb45d89773a612a18e960f%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F1177449924.jpg" 
          alt="Olympic Logo" 
          className="mx-auto mb-6 h-32 rounded-full shadow-xl transform transition-transform hover:scale-105"
        />
        <h1 className="text-6xl font-extrabold mb-4">Paris 2024 Olympic Games</h1>
        <p className="text-2xl mb-8">Experience the Thrill of Victory</p>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 md:grid-cols-2 md:gap-6">
          <div className="bg-blue-700 text-white py-4 px-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FontAwesomeIcon icon={faFire} className="text-4xl" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Opening Ceremony</h2>
              <p className="text-lg">July 26, 2024</p>
            </div>
          </div>
          <div className="bg-green-700 text-white py-4 px-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FontAwesomeIcon icon={faMedal} className="text-4xl" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Closing Ceremony</h2>
              <p className="text-lg">August 11, 2024</p>
            </div>
          </div>
          <div className="bg-red-700 text-white py-4 px-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FontAwesomeIcon icon={faRunning} className="text-4xl" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Track & Field Finals</h2>
              <p className="text-lg">August 6-10, 2024</p>
            </div>
          </div>
          <div className="bg-purple-700 text-white py-4 px-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FontAwesomeIcon icon={faSwimmer} className="text-4xl" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Swimming Finals</h2>
              <p className="text-lg">August 3-7, 2024</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center bg-white text-blue-800 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="text-5xl font-bold">{value}</div>
              <div className="text-sm uppercase">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  
  );
}

export default HeroSection;