

const SearchBar = ({ onSearch, className, searchTerm, setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={className}>
      <input
        type="text"
        placeholder="Search by Endangered Status"
        value={searchTerm}
        onChange={handleInputChange}
        className="show-input"
      />
      <button onClick={handleSearch} className="search-bar">
        Search
      </button>
    </div>
  );
};

export default SearchBar;