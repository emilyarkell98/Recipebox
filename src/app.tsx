import React, { useState } from 'react';
import { BookmarkProvider } from './context/BookmarkContext';
import RecipeList from './components/RecipeList';
import BookmarkModal from './components/BookmarkModal';
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';
import './styles/Styles.css';

const App: React.FC = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);

  return (
    <BookmarkProvider>
      <div className="App">
        <header className="header">
          <div className="header-title">Recipe Box</div>
          <button className="bookmark-button" onClick={() => setShowBookmarks(true)}>
            <BookmarkIconSolid className="bookmark-icon" />
          </button>
        </header>
        <RecipeList />
        {showBookmarks && <BookmarkModal onClose={() => setShowBookmarks(false)} />}
      </div>
    </BookmarkProvider>
  );
};

export default App;
