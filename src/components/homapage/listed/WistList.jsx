import React, { useContext } from 'react';
import { BookContext } from '../../bookContext/BookContext';
import BookCard from '../../ui/BookCard';

const WistList = () => {

    const {storeBook, Wishlist} = useContext(BookContext)
    console.log(storeBook, Wishlist);

if(Wishlist.length === 0){
    return <div className='text-center bg-slate-100 p-15 '>
        <h2 className='text-2xl font-bold'>No Wist List Data</h2>
    </div>
}

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            
            {
                Wishlist.map((book, index) => <BookCard key={index} book={book}/>)
            }
        </div>
    );
};

export default WistList;