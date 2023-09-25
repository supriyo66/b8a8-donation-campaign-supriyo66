import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistic from './Components/Statistic/Statistic';
import Error from './Components/ErrorPage/Error';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element:<Donation></Donation>,
      },
      {
        path: "/statistic",
        element:<Statistic></Statistic>
      },
      {
        path: "/category1/:id",
        element:<CategoryDetails></CategoryDetails>,
        loader:()=>fetch('../CategoryData.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
