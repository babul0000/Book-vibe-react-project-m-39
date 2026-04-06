import { Star } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const BookCard = ({book}) => {
  return (
    <NavLink to={`/bookDetails/${book.bookId}`} className="card bg-base-100 w-96 shadow-sm my-5">
  <figure>
    <img 
    className="w-50 h-70 py-5"
      src={book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  
      <div className="flex gap-3">
        {
          book.tags.map((tag, index) => (
            <div key={index} className= "border border-green-300 font-bold text-green-500 py-1 px-2 rounded-md">{tag}</div>
          ))
        }
        <div className= "border border-green-300 font-bold text-green-500 py-1 px-2 rounded-md">Young Adult</div>

      <div className="border border-green-300 font-bold text-green-500 py-1 px-2 rounded-md">Identity</div>
      </div>
    
    <p className="text-2xl font-bold">{book.bookName}</p>
    <p className="text-md">{book.author}</p>
    
    <div className="card-actions justify-between border-t-1 border-dashed pt-4">
      <div className="badge">{book.category}</div>
      <div className="flex ">
        <div className="badge text-md font-medium">{book.rating} </div>
        <span><Star/></span>
      </div>
    </div>
  </div>
</NavLink>
  );
};

export default BookCard;