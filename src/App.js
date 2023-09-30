import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults'; // Import the new component

function App() {
  const [animalData, setAnimalData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
   
    axios
      .get('https://wildlifesafari-backend.onrender.com/animals/')
      .then((response) => {
        setAnimalData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching animal data:', error);
      });
  }, []);

  const handleSearch = () => {
    
    const filteredResults = animalData.filter((animal) =>
      animal.conservation_status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="App">
      <SearchBar
        className="SearchBar"
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {searchResults ? (
        <SearchResults searchResults={searchResults} />
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default App;