import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../bookContext/BookContext";
import BookCard from "../../ui/BookCard";

const WishList = ({soothing}) => {
  const { Wishlist } = useContext(BookContext);


  const [filterWist, setfilterWist] = useState(Wishlist);
  
    console.log(filterWist);
  
    useEffect(() => {
      if (soothing) {
        if (soothing === "pages") {
        const sortedData = [...Wishlist].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData);
        setfilterWist(sortedData);
  
        
      }else if (soothing === "rating") {
        const sortedData = [...Wishlist].sort(
          (a, b) => a.rating - b.rating,
        );
        console.log(sortedData);
        setfilterWist(sortedData);
      }
      }
  
  
    }, [soothing, Wishlist]);

  if (filterWist.length === 0) {
    return (
      <div className="text-center bg-slate-100 p-16 ">
        <h2 className="text-2xl font-bold">No Wish List Data</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {filterWist.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default WishList;
