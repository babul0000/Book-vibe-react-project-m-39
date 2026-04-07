// import React, { createContext, useState } from "react";

// export const BookContexts = createContext();

// const BookContext = ({ Children }) => {

// const [storeBook, setStoreBook] = useState([]);

//   const handleMarkRead = (currentBook) => {
//     const isExistBook = storeBook.find(
//       (book) => book.bookId === currentBook.bookId,
//     );
//     if (isExistBook) {
//       alert("this is book id");
//     } else {
//       setStoreBook([...storeBook, currentBook]);
//     }

//     console.log(currentBook, storeBook);
// };


// //   const data ={
// //     storeBook,
// //     setStoreBook,
// //     handleMarkRead
// //   }

// return <BookContexts.Provider>{Children}</BookContexts.Provider>;
// };

// export default BookContext;
