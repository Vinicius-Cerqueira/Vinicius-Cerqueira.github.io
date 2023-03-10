import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Root from './root';
import App from './App';


import dp203Data from './data/jsonData.json'
import dp900Data from './data/jsonDataDp900.json'
import pl300Data from './data/jsonDataPl300.json'
import az104Data from './data/jsonDataAz104.json'

const router = createHashRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "dp-203/",
    element: <App data={dp203Data} />
  },
  {
    path: "dp-900/",
    element: <App data={dp900Data} />
  },
  {
    path: "pl-300/",
    element: <App data={pl300Data} />
  },
  {
    path: "az-104/",
    element: <App data={az104Data} />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
