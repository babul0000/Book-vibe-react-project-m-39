import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../errorpage/ErrorPage";
import BookDetails from "../pages/booksDetails/BookDetails";



export const router = createBrowserRouter([
    {
    path: "/",
    element: <MainLayout/>,
    children: [
    {
        index: true,
        element: <Homepage/>
    },

    {
        path: "/books",
        element: <Books/>,
    },
    {
        path: "/bookDetails/:bookId",
        loader: () => fetch("/booksData.json"),
        element: <BookDetails></BookDetails>
        
    },

    ],
    errorElement: <ErrorPage/>
    }

]);