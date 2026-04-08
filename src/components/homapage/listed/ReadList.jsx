import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../bookContext/BookContext";
import BookCard from "../../ui/BookCard";

const ReadList = ({ soothing }) => {
  const { storeBook } = useContext(BookContext);

  const [filter, setFilter] = useState(storeBook);

  console.log(filter);

  useEffect(() => {
    if (soothing) {
      if (soothing === "pages") {
      const sortedData = [...storeBook].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      console.log(sortedData);
      setFilter(sortedData);

      
    }else if (soothing === "rating") {
      const sortedData = [...storeBook].sort(
        (a, b) => a.rating - b.rating,
      );
      console.log(sortedData);
      setFilter(sortedData);
    }
    }


  }, [soothing, storeBook]);


  if (filter.length === 0) {
    return (
      <div className="text-center bg-slate-100 p-16">
        <h2 className="text-2xl font-bold">No Read List Data</h2>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {filter.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default ReadList;
