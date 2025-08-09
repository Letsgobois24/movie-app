import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/Home'
import DetailPage from './Pages/Detail'
import { WatchListProvider } from './context/WatchListContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/movie/:id',
    element: <DetailPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatchListProvider>
      <RouterProvider router={router} />
    </WatchListProvider>
  </StrictMode>,
)
