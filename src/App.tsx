import React, { Children, Profiler } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLogin from './Componants/MasterLogin/MasterLogin';
import LoginProcess from './Componants/Login/LoginProcess';
import Register from './Componants/Register/Register';
import Forget from './Componants/Forget/Forget';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Reset from './Componants/Reset/Reset';
import Changepass from './Componants/ChangePassword/Changepass';
import AuthProject from './Componants/AuthProject/AuthProject';
import Landing from './Componants/Landing/Landing';
import Listing from './Componants/Listing/Listing';
import CartPage from './Componants/CartPadge/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد Bootstrap CSS
import Profile from './Componants/Profile/Profile';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MasterLogin />,
    
      children: [
        { index: true, element: <LoginProcess /> },
        { path: 'LoginProcess', element: <LoginProcess /> },
        { path: 'Register', element: <Register /> },
        { path: 'Forget', element: <Forget /> },
        { path: 'Reset', element: <Reset /> },
        { path: 'Changepass', element: <Changepass /> },
      ],
    },
    {
      path: '/AuthLayout',
      element: <AuthProject />,
    
      children: [
        { path: 'Landing', element: <Landing /> },
        { path: 'Listing', element: <Listing /> },
        { path: 'CartPage', element: <CartPage /> },
        { path: 'profile', element: <Profile /> },
        { path: 'change', element: <Changepass /> },
      ],
    },
  ]);
  return (
    <div>
        <ToastContainer />

      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App;