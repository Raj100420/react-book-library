import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex items-center bg-white shadow-md rounded-lg mb-6 p-3 transition-all focus-within:shadow-lg border border-gray-200">
      <span className="material-icons text-gray-400 mx-2">search</span>
      <input
        type="text"
        placeholder="Search books by title or author..."
        className="w-full p-2 outline-none text-gray-700"
        value={searchTerm}
        onChange={handleSearchChange}
        aria-label="Search books"
      />
      {searchTerm && (
        <button 
          onClick={handleClearSearch}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Clear search"
        >
          <span className="material-icons text-xl mx-2">close</span>
        </button>
      )}
    </div>
  );
};
