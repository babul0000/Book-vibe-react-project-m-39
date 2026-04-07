import { Star } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const BookCard = ({book}) => {
  return (
    <NavLink 
      to={`/bookDetails/${book.bookId}`} 
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 w-full"
    >
      {/* Image Section - Smaller Height */}
      <div className="h-[260px] bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
        <img 
          src={book.image} 
          alt={book.bookName}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {book.tags?.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium px-3 py-1 bg-green-100 text-green-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-[16px] leading-tight text-gray-900 line-clamp-2 mb-2 min-h-[40px]">
          {book.bookName}
        </h3>

        {/* Author */}
        <p className="text-sm text-gray-600 mb-4">
          {book.author}
        </p>

        {/* Genre */}
        <p className="text-xs text-gray-500 mb-5 border-b border-dashed border-gray-200 pb-4">
          {book.category}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="font-semibold text-gray-900 text-base">{book.rating}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default BookCard;