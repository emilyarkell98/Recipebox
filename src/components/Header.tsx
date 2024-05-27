import React from 'react';
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';

interface HeaderProps {
  onBookmarkClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookmarkClick }) => {
  return (
    <header className="header">
      <div className="header-title">RECIPEBOX</div>
      <button className="bookmark-button" onClick={onBookmarkClick}>
        <BookmarkIconSolid className="bookmark-icon" />
      </button>
    </header>
  );
};

export default Header;
