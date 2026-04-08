import React, { useState } from "react";
import { BookContext } from "../../components/bookContext/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../components/homapage/listed/ReadList";
import WishList from "../../components/homapage/listed/WishList";

const Books = () => {
  // const { Wishlist } = useContext(BookContext);

  const [soothing, setSoothing] = useState("");

  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-center mt-5">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Short By : {soothing}⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSoothing("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSoothing("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>




      <Tabs>
        <TabList>
          <Tab >read list</Tab>
          <Tab >wish list</Tab>
        </TabList>

        <TabPanel>
          <ReadList soothing={soothing} />
        </TabPanel>

        <TabPanel>
          \n <WishList soothing={soothing} />
          \n{" "}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
