import React, { useContext, useState } from 'react';
import { BookContext } from '../../components/bookContext/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../components/homapage/listed/ReadList';
import WistList from '../../components/homapage/listed/WistList';

const Books = () => {

    const {storeBook, Wishlist} = useContext(BookContext)
console.log(storeBook, Wishlist);

const [sothing, setSothing] = useState("");

console.log(sothing, "sothing");


    return (
        <div className='w-10/12 mx-auto'>


<div className='flex justify-center mt-5'>
    
            <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Short By ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Pages</a></li>
    <li><a>Rating</a></li>
  </ul>
</div>

</div>
            
            

            <Tabs>
    <TabList>
    <Tab onClick={() => setSothing('Pages')}>read list</Tab>
    <Tab onClick={() => setSothing('Rating')}>wish list</Tab>
    </TabList>



    <TabPanel>
    <ReadList sothing={sothing}/>
    </TabPanel>



    <TabPanel>
    <WistList sothing={sothing}/>
    </TabPanel>
</Tabs>
        </div>
    );
};

export default Books;