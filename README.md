# react-book-library
📚 A responsive React application to list, search, and view book details with a toggleable description.
<br>
Author- Rishikesh Gupta


# Book Collection App

A single-page React application that displays a filterable list of books with toggle-able descriptions.

## Features

- Display a list of books with title, author, and publication year information
- Toggle book descriptions to show/hide additional details
- Search functionality to filter books by title or author
- Responsive design that works well on mobile, tablet, and desktop devices
- Clean, modern UI with gradient effects and proper spacing

## Technologies Used

- React (with Hooks for state management)
- TypeScript for type safety
- Tailwind CSS for styling
- Shadcn UI components
- Vite for fast development and building

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/book-collection-app.git
cd book-collection-app
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

```
book-collection-app/
├── client/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── data/            # Book data
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # Entry point
├── server/                  # Express server
├── shared/                  # Shared types and schemas
└── public/                  # Static assets
```

## Design Decisions

1. **Component Structure**:
   - Created separate components for Book, BookList, and SearchBar for better code organization and reusability
   - Used clear prop interfaces for type safety and better development experience

2. **State Management**:
   - Used React's useState hook for managing component state
   - Kept state management simple with no external libraries needed for this scale of application

3. **Styling Approach**:
   - Used Tailwind CSS for utility-first styling approach
   - Employed gradient text effects for visual appeal
   - Made sure the design is responsive across different device sizes
   - Used conditional rendering with fade animations for smoother transitions

4. **Search Implementation**:
   - Real-time filtering of books as user types in the search field
   - Filter by both title and author with case-insensitive matching
   - Added clear search functionality for better UX
   - Included an empty state design when no results are found

5. **Accessibility**:
   - Added proper aria-labels for interactive elements
   - Ensured sufficient color contrast for text readability
   - Made interactive elements clearly visible and easy to use

## Future Improvements

- Add sorting options (by title, author, or year)
- Implement book ratings or favorites feature
- Add pagination for larger book collections
- Create categories or tags for better organization
- Add dark mode toggle

## License

MIT
