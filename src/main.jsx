import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Root from './root';
import App from './App';

import ai102Data from './data/questions-ai-102.json'
import az104Data from './data/questions-az-104.json'
import az204Data from './data/questions-az-204.json'
import az220Data from './data/questions-az-220.json'
import az305Data from './data/questions-az-305.json'
import az400Data from './data/questions-az-400.json'
import dp100Data from './data/questions-dp-100.json'
import dp203Data from './data/questions-dp-203.json'
import dp300Data from './data/questions-dp-300.json'
import dp420Data from './data/questions-dp-420.json'
import pl200Data from './data/questions-pl-200.json'
import pl300Data from './data/questions-pl-300.json'
import pl400Data from './data/questions-pl-400.json'
import pl600Data from './data/questions-pl-600.json'

const router = createHashRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "ai-102/",
    element: <App data={ai102Data} />
  },
  {
    path: "az-104/",
    element: <App data={az104Data} />
  },
  {
    path: "az-204/",
    element: <App data={az204Data} />
  },
  {
    path: "az-220/",
    element: <App data={az104Data} />
  },
  {
    path: "az-305/",
    element: <App data={az104Data} />
  },
  {
    path: "az-400/",
    element: <App data={az400Data} />
  },
  {
    path: "dp-100/",
    element: <App data={dp100Data} />
  },
  {
    path: "dp-203/",
    element: <App data={dp203Data} />
  },
  {
    path: "dp-300/",
    element: <App data={dp300Data} />
  },
  {
    path: "dp-420/",
    element: <App data={dp420Data} />
  },
  {
    path: "pl-200/",
    element: <App data={pl200Data} />
  },
  {
    path: "pl-300/",
    element: <App data={pl300Data} />
  },
  {
    path: "pl-400/",
    element: <App data={pl400Data} />
  },
  {
    path: "pl-600/",
    element: <App data={pl600Data} />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
