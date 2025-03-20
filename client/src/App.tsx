import { useState } from "react";
import { BookList } from "./components/BookList";
import { booksData } from "./data/books";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [books] = useState(booksData);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-6 mb-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">My Book Collection</h1>
          <p className="text-gray-600 mt-2">Browse through your favorite books and discover new ones</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-4 max-w-5xl">
        <BookList 
          books={books} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
      </main>
      
      <footer className="text-center text-gray-500 text-sm mt-12 pt-4 border-t border-gray-200 pb-8">
        <p>© {new Date().getFullYear()} Book Collection App | Created with React</p>
      </footer>
      
      <Toaster />
    </div>
  );
}

export default App;
