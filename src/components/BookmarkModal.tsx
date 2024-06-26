import React from 'react';
import { useBookmarks } from '../context/BookmarkContext';
import { XMarkIcon } from '@heroicons/react/24/solid';

const BookmarkModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { bookmarks, removeBookmark } = useBookmarks();

    return (
        <div className="bookmark-modal">
            <div className="bookmark-modal-content">
                <div className="bookmark-modal-header">
                    <h2 className="bookmark-modal-title">Saved Recipes</h2>
                    <button className="bookmark-modal-close" onClick={onClose}>
                        <XMarkIcon className='book-modal-close-xmark'/>
                    </button>
                </div>
                <div className="bookmark-modal-body">
                    {bookmarks.map((recipe) => (
                        <div className="bookmark-item" key={recipe.id}>
                            <img src={recipe.image[0].url} alt={recipe.title} className="bookmark-image" />
                            <div className="bookmark-details">
                                <h3 className="bookmark-item-title">{recipe.title}</h3>
                            </div>
                            <button onClick={() => removeBookmark(recipe.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookmarkModal;
