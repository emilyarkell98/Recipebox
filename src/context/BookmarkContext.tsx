import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Recipe } from '../types';


interface BookmarkContextType {
  bookmarks: Recipe[];
  addBookmark: (recipe: Recipe) => void;
  removeBookmark: (id: number) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};

interface BookmarkProviderProps {
  children: ReactNode; // Define children prop type
}

export const BookmarkProvider: React.FC<BookmarkProviderProps> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Recipe[]>([]);

  const addBookmark = (recipe: Recipe) => {
    setBookmarks([...bookmarks, recipe]);
  };

  const removeBookmark = (id: number) => {
    setBookmarks(bookmarks.filter((recipe) => recipe.id !== id));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
