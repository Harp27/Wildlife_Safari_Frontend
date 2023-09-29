import { Outlet } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  // Define a function to handle search
  const handleSearch = (searchTerm) => {
    // Implement your filtering logic here and update the UI accordingly.
    // You can pass the search term to the child routes/components if needed.
    console.log(`Search term: ${searchTerm}`);
  };

  return (
    <div className="App">
      <SearchBar className="SearchBar" onSearch={handleSearch} />
      <Outlet />
    </div>
  );
}

export default App;






