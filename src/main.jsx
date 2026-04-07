import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import router from './Router/router.jsx'
import BookVibeProvider from './context/BookVibeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BookVibeProvider>
    <RouterProvider router={router} />
  </BookVibeProvider>
)
