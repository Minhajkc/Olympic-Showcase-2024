import React from 'react';

function AthleteSpotlight() {
  const athletes = [
    {
      name: "Simone Biles",
      sport: "Gymnastics",
      country: "USA",
      accomplishments: "4 Olympic gold medals in 2016, 19 World Championship gold medals",
      image: "https://i.abcnewsfe.com/a/91a49e89-abc9-4438-8b38-e43c1db927b2/simone-biles-1-rt-bb-240619_1718819053325_hpMain_16x9.jpg?w=992simone-biles.jpg"
    },
    {
      name: "Eliud Kipchoge",
      sport: "Marathon",
      country: "Kenya",
      accomplishments: "2-time Olympic gold medalist, world record holder for marathon",
      image: "https://cdn.outsideonline.com/wp-content/uploads/2021/08/eliud-kipchoge-toyko2020_h.jpg?crop=16:9&width=960&enable=upscale&quality=100"
    },
    {
      name: "Naomi Osaka",
      sport: "Tennis",
      country: "Japan",
      accomplishments: "4 Grand Slam titles, Olympic gold medalist in women's doubles (2024)",
      image: "https://asiasociety.org/sites/default/files/styles/1200w/public/2020-08/200827_Osaka_Naomi_AGC.jpg"
    }
  ];
  

  return (
    <section className="py-20 bg-gradient-to-r from-[#000000] via-[#0591bf] to-[#000000]">
  <div className="container mx-auto">
    <h2 className="text-5xl font-bold text-white text-center mb-10">Athlete Spotlight</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {athletes.map((athlete, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl relative group"
        >
          <img 
            src={athlete.image} 
            alt={athlete.name} 
            className="w-full h-64 object-cover transition-opacity group-hover:opacity-70"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{athlete.name}</h3>
            <p className="text-gray-600 mb-4">{athlete.sport} - {athlete.country}</p>
            <p className="text-gray-700">{athlete.accomplishments}</p>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-lg font-semibold text-center">{athlete.accomplishments}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default AthleteSpotlight;