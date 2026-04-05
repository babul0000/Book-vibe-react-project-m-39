import { Star } from "lucide-react";
import React, { use } from "react";
import BookCard from "../ui/BookCard";
const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);

  return (
<div className="container mx-auto">
  <h1 className="text-center text-2xl font-bold my-10">all books</h1>

  <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto">
    {
    books.map((book, index) => {
      return(
      <BookCard key={index} book={book}/>

      )
    } )
  }
  </div>
</div>


    // <div className="my-20 px-4">
    //   <h2 className="font-bold text-3xl mb-8 text-center">All Books</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    //     {books.map((book) => (
    //       <div
    //         key={book.bookId}
    //         className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all p-6"
    //       >
    //         <img
    //           src={book.image}
    //           alt={book.bookName}
    //           className="w-full h-64 object-cover rounded-t-lg"
    //         />
    //         <div className="mt-4">
    //           <h3 className="font-bold text-xl mb-2 line-clamp-2">
    //             {book.bookName}
    //           </h3>
    //           <p className="text-gray-600 mb-3">
    //             by <span className="font-semibold">{book.author}</span>
    //           </p>
    //           <div className="flex items-center justify-between mb-4">
    //             <span className="text-yellow-500 font-bold text-lg">
    //               ★ {book.rating}
    //             </span>
    //             <span className="text-sm text-gray-500">
    //               {book.totalPages} pages
    //             </span>
    //           </div>
    //           <div className="flex flex-wrap gap-2 mb-4">
    //             {book.tags.slice(0, 3).map((tag) => (
    //               <span
    //                 key={tag}
    //                 className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
    //               >
    //                 {tag}
    //               </span>
    //             ))}
    //           </div>
    //           <p className="text-sm text-gray-600 line-clamp-3">
    //             {book.review}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default AllBooks;
