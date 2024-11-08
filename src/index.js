import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './common/Header.css';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './pages/Contact';
import './App.css'
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Error404 from './pages/Error404';
import MyForm from './pages/MyForm';



let allRoutes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/blogs',
      element: <Blog />
    },
    {
      path: '/form',
      element: <MyForm />
    },
    {
      path: '/blog/:id',
      element: <BlogDetail />
    }
    ,{
      path: "*",
      element: <Error404 />
    }
    

  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
