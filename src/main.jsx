import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from "react-router/dom";

import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/Homepage';
import Books from './pages/books/Books';
import { router } from './routes/Routes';
import BookProvider from './components/bookContext/BookContext';
import { ToastContainer } from 'react-toastify';
// import BookContext from './components/bookContext/BookContext';






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
        <RouterProvider router={router} />,
        <ToastContainer />
    </BookProvider>
        
    
    
  </StrictMode>,
)
