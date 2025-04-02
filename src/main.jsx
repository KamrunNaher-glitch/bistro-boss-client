import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Providers/AuthProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <HelmetProvider>
      <AuthProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </HelmetProvider>

  </StrictMode>,
)
