import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import "../App.css";

function Endangered({ animalData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    
    const filtered = animalData.filter((item) => {
      return item.conservation_status.toLowerCase().includes(searchTerm.toLowerCase());
    });

   
    setFilteredData(filtered);
  }, [animalData, searchTerm]);

  return (
    <div className="animals-grid">
      <input
        type="text"
        placeholder="Search by Endangered Status"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="show-input"
      />

      {filteredData.map((item) => (
        <div className="animal-image" key={item.id}>
          <Link to={`/post/${item.id}`}> 
            <img src={item.image} alt={item.species_name} />
            <h2 className="show-text">{item.species_name}</h2>
            <p className="animal-info">{item.description}</p>
            <p className="animal-info">Conservation Status: {item.conservation_status}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Endangered;