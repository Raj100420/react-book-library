import React from "react";
import { Book } from "./Book";
import { SearchBar } from "./SearchBar";
import { BookType } from "../data/books";

interface BookListProps {
  books: BookType[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const BookList: React.FC<BookListProps> = ({ books, searchTerm, setSearchTerm }) => {
  const filteredBooks = books.filter(book => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      book.author.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Find Your Next Read</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      
      <div className="mb-4 flex justify-between items-center">
        <p className="text-gray-500 text-sm">
          {filteredBooks.length === 1 
            ? "1 book found" 
            : `${filteredBooks.length} books found`}
        </p>
        
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm("")}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            <span className="material-icons text-sm mr-1">refresh</span>
            Clear search
          </button>
        )}
      </div>
      
      {filteredBooks.length === 0 && (
        <div className="py-12 text-center bg-gray-50 rounded-lg border border-gray-200">
          <span className="material-icons text-4xl mb-2 text-gray-400">search_off</span>
          <p className="text-gray-600 font-medium">No books match your search.</p>
          <p className="text-gray-500 text-sm mt-1">Try a different term or browse all books.</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
