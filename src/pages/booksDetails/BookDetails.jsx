import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../components/bookContext/BookContext';

const BookDetails = () => {
  const {bookId} = useParams();
  console.log(bookId);
  

const books = useLoaderData();
// console.log(books);

const data = books.find(book => book.bookId == parseInt(bookId));
console.log(data);

const {handleMarkRead, handleWishList, storeBook} = useContext(BookContext)
console.log(handleMarkRead, storeBook);



  

  return (
    
    <div className="w-8/12  mt-20 mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
      <div className="flex flex-col lg:flex-row">
        
        {/* Book Cover Image */}
        <div className="w-5/12 p-8 flex items-center justify-center bg-gray-50">
          <div className="relative w-full">
            <img 
              src={data.image}
              alt="Why Do You Hate Money?" 
              className="w-full shadow-2xl rounded-lg"
            />
            {/* Optional red accent line like Figma */}
            <div className="absolute -top-3 -right-3 w-8 h-40 bg-red-600 rotate-12 rounded"></div>
          </div>
        </div>

        {/* Book Information */}
        <div className="lg:w-3/5 p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                {data.bookName}
              </h1>
              <p className="text-xl text-gray-600 mt-1">{data.author}</p>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-success transition">
                Sign In
              </button>
              <button className="btn btn-primary transition">
                Sign Up
              </button>
            </div>
          </div>

          <p className="text-gray-500 mb-6">{data.tags[1]}</p>

          {/* Review */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              {data.review}
            </p>
          </div>

          {/* Tags */}
          <div className="flex gap-3 mb-8">

            {
          data.tags.map((tag, index) => (
            <div key={index} className= "border border-green-300 font-bold text-green-500 py-1 px-2 rounded-md">{tag}</div>
          ))
        }

          </div>

          {/* Book Meta Info */}
          <div className="grid grid-cols-1 gap-y-4 text-sm mb-8">
            <div className='flex'>
              <p className="text-gray-500">Number of Pages: </p>
              <p className="font-semibold ml-30 text-gray-900">{data.totalPages}</p>
            </div>
            <div  className='flex '>
              <p className="text-gray-500">Publisher:</p>
              <p className="font-semibold ml-30 text-gray-900">{data.publisher}</p>
            </div>
            <div  className='flex'>
              <p className="text-gray-500">Year of Publishing:</p>
              <p className="font-semibold ml-30 text-gray-900">{data.yearOfPublishing}</p>
            </div>
            <div  className='flex'>
              <p className="text-gray-500">Rating:</p>
              <p className="font-semibold ml-30 text-gray-900">{data.rating}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button onClick={() => handleMarkRead(data)} className="btn w-5/12 transition">
              Read
            </button>
            <button onClick={() => handleWishList(data)} className="btn btn-primary w-5/12 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
