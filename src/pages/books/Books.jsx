import React, { useContext } from 'react';
import { BookContext } from '../../components/bookContext/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../components/homapage/listed/ReadList';
import WistList from '../../components/homapage/listed/WistList';

const Books = () => {

    const {storeBook, Wishlist} = useContext(BookContext)
console.log(storeBook, Wishlist);

    return (
        <div className='w-10/12 mx-auto'>
            
            

            <Tabs>
    <TabList>
    <Tab>read list</Tab>
    <Tab>wish list</Tab>
    </TabList>



    <TabPanel>
    <ReadList/>
    </TabPanel>



    <TabPanel>
    <WistList/>
    </TabPanel>
</Tabs>
        </div>
    );
};

export default Books;