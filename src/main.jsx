import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/Home';
import DetailPage from './Pages/Detail';
import SearchPage from './Pages/Search';
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
      <SkeletonTheme baseColor="#9fbfa0" highlightColor="#cde8c2">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </WatchListProvider>
  </StrictMode>,
)
