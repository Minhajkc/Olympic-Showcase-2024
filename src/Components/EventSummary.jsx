import React from 'react';

function EventSummary() {
  const medalTally = [
    { country: "USA", gold: 39, silver: 41, bronze: 33 },
    { country: "China", gold: 38, silver: 32, bronze: 18 },
    { country: "Japan", gold: 27, silver: 14, bronze: 17 },
    { country: "Great Britain", gold: 22, silver: 21, bronze: 22 },
    { country: "ROC", gold: 20, silver: 28, bronze: 23 },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#000000] via-[#0591bf] to-[#000000] font-extralight ">
  <div className="container mx-auto px-4">
    <h2 className="text-5xl font-bold text-center mb-12 text-white">Medal's</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-4 font-semibold text-left border-b border-gray-300">Country</th>
            <th className="p-4 font-semibold text-center border-b border-gray-300">Gold</th>
            <th className="p-4 font-semibold text-center border-b border-gray-300">Silver</th>
            <th className="p-4 font-semibold text-center border-b border-gray-300">Bronze</th>
            <th className="p-4 font-semibold text-center border-b border-gray-300">Total</th>
          </tr>
        </thead>
        <tbody>
          {medalTally.map((country, index) => (
            <tr 
              key={index} 
              className={`hover:bg-blue-50 transition duration-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            >
              <td className="p-4 border-b border-gray-300">{country.country}</td>
              <td className="p-4 text-center border-b border-gray-300 font-semibold text-yellow-500">{country.gold}</td>
              <td className="p-4 text-center border-b border-gray-300 font-semibold text-gray-400">{country.silver}</td>
              <td className="p-4 text-center border-b border-gray-300 font-semibold text-orange-500">{country.bronze}</td>
              <td className="p-4 text-center border-b border-gray-300 font-semibold">
                {country.gold + country.silver + country.bronze}
              </td>
            </tr>
          ))}
          <tr className="bg-blue-100 font-semibold">
            <td className="p-4 text-left border-b border-gray-300">Total</td>
            <td className="p-4 text-center border-b border-gray-300">
              {medalTally.reduce((acc, country) => acc + country.gold, 0)}
            </td>
            <td className="p-4 text-center border-b border-gray-300">
              {medalTally.reduce((acc, country) => acc + country.silver, 0)}
            </td>
            <td className="p-4 text-center border-b border-gray-300">
              {medalTally.reduce((acc, country) => acc + country.bronze, 0)}
            </td>
            <td className="p-4 text-center border-b border-gray-300">
              {medalTally.reduce((acc, country) => acc + country.gold + country.silver + country.bronze, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

  
  );
}

export default EventSummary;