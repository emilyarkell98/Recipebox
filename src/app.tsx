import React, { useState } from 'react';
import { BookmarkProvider } from './context/BookmarkContext';
import RecipeList from './components/RecipeList';
import BookmarkModal from './components/BookmarkModal';
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';
import './styles/Styles.css';
import Header from './components/Header';

const App: React.FC = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);

  return (
    <BookmarkProvider>
      <div className="App">
      <Header onBookmarkClick={() => setShowBookmarks(true)} />
        <RecipeList />
        {showBookmarks && <BookmarkModal onClose={() => setShowBookmarks(false)} />}
      </div>
    </BookmarkProvider>
  );
};

export default App;
