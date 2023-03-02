import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Root from './root';
import App from './App';
import Dp900 from './Dp900';
import Pl300 from './Pl300';
import Az104 from './Az104';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "dp-203/",
    element: <App />
  },
  {
    path: "dp-900/",
    element: <Dp900 />
  },
  {
    path: "pl-300/",
    element: <Pl300 />
  },
  {
    path: "az-104/",
    element: <Az104 />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
