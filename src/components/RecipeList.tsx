import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../api';
import { Recipe } from '../types';
import { useBookmarks } from '../context/BookmarkContext';
import '../styles/Styles.css';
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/24/outline';

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };
    getRecipes();
  }, []);

  const isBookmarked = (id: number) => bookmarks.some((recipe) => recipe.id === id);

  return (
    <div className="recipe-container">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-square">
          <img src={recipe.image[0].url} alt={recipe.image[0].title} className="recipe-image" />
          <div className="title-icon">
            <h2 className="recipe-title">{recipe.title}</h2>
            <button className="bookmark-button" onClick={() => isBookmarked(recipe.id) ? removeBookmark(recipe.id) : addBookmark(recipe)}>
              {isBookmarked(recipe.id) ? (
                <BookmarkIconSolid className="bookmark-icon" />
              ) : (
                <BookmarkIconOutline className="bookmark-icon" />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default RecipeList;