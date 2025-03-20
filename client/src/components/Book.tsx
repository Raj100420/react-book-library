import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BookType } from "../data/books";

interface BookProps {
  book: BookType;
}

export const Book: React.FC<BookProps> = ({ book }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-5">
        <h2 className="text-xl font-medium mb-1">{book.title}</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">{book.author}</p>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">{book.year}</span>
        </div>
        
        {isExpanded && (
          <div className="mt-3 mb-2 animate-fadeIn">
            <p className="text-gray-700">{book.description}</p>
          </div>
        )}
        
        <button 
          className="mt-2 flex items-center text-blue-600 font-medium"
          onClick={toggleDescription}
        >
          <span className="text-sm mr-1">
            {isExpanded ? "Hide details" : "Show details"}
          </span>
          <span className="material-icons text-sm">
            {isExpanded ? "expand_less" : "expand_more"}
          </span>
        </button>
      </div>
    </div>
  );
};
