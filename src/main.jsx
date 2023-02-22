import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './root';
import App from './App';
import Dp900 from './Dp900';
const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
