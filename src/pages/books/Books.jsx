import React, { useContext } from 'react';
import { BookContext } from '../../components/bookContext/BookContext';

const Books = () => {

    const {storeBook} = useContext(BookContext)
console.log(storeBook);

    return (
        <div>
            
            
        </div>
    );
};

export default Books;