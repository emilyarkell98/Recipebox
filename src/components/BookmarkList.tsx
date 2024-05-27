import React from 'react';
import { useBookmarks } from '../context/BookmarkContext';

const BookmarkList: React.FC = () => {
  const { bookmarks } = useBookmarks();

  return (
    <div className="bookmark-list">
      {bookmarks.length > 0 ? (
        bookmarks.map((recipe) => (
          <div key={recipe.id} className="bookmark-item">
            {recipe.title}
          </div>
        ))
      ) : (
        <div className="no-bookmarks">No bookmarks</div>
      )}
    </div>
  );
};

export default BookmarkList;
