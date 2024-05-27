import React, { useState } from 'react';
import { BookmarkIcon } from '@heroicons/react/24/solid';
import '../styles/Styles.css';

const Header: React.FC = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);

  const toggleBookmarks = () => {
    setShowBookmarks(!showBookmarks);
  };

  return (
    <header className="header">
      <h1 className="header-title">Recipe Boxssfdf</h1>
      <button onClick={toggleBookmarks} className="bookmark-button-header">
        <BookmarkIcon className="header-bookmark-icon" />
      </button>
      {showBookmarks}
    </header>
  );
};

export default Header;