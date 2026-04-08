import React, { createContext, useState } from "react";

import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storeBook, setStoreBook] = useState([]);
  const [Wishlist, setWishList] = useState([]);

  const handleMarkRead = (currentBook) => {
    const isExistBook = storeBook.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("already added to list");
    } else {
      setStoreBook([...storeBook, currentBook]);
      toast.success(`${currentBook.bookName} added to list`);
    }
  };

  const handleWishList = (currentBook) => {
    const isExistWishList = Wishlist.find(
      (book) => book.bookId == currentBook.bookId,
    );

    if (isExistWishList) {
      toast.error("already added to list");
      return;
    }

    const isExistBook = Wishlist.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("already added to list");
    } else {
      setWishList([...Wishlist, currentBook]);
      toast.success(`${currentBook.bookName} added to list`);
    }
  };

  const data = {
    storeBook,
    setStoreBook,
    handleMarkRead,
    Wishlist,
    setWishList,
    handleWishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
