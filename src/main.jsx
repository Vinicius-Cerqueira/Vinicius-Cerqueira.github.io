import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Root from './root';
import App from './App';
import Dp900 from './Dp900';
import Pl300 from './Pl300';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
