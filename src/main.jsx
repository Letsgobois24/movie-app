import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/home';
import DetailPage from './Pages/detail';
import SearchPage from './Pages/search';
import { WatchListProvider } from './context/WatchListContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/movie/:id',
    element: <DetailPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatchListProvider>
      <RouterProvider router={router} />
    </WatchListProvider>
  </StrictMode>,
)
