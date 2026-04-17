import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/Layout.jsx';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home.jsx'
import TimeLine from './Pages/TimeLine.jsx'
import Stats from './Pages/Stats'
import ErrorPage from './Pages/ErrorPage.jsx';
import InteractionProvider from './Context/InteractionProvider.jsx';
import { ToastContainer } from 'react-toastify';
import FriendDetails from './Component/FriendDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
      children: [
      { index: true,
        Component: Home },
      {
      path : '/timeline',
      Component: TimeLine ,
      } ,
      {
      path : '/stats' ,
      Component  : Stats,
      } ,
      {
      path : '/friendsDetails/:id',
      Component : FriendDetails
      } 

      ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InteractionProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </InteractionProvider>

  </StrictMode>,
)
