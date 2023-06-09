import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Books from './Component/Books'
import BookDetails from './Component/BookDetails'
import LoadingSpinner from './Component/LoadingSpinner'
import ErrorPage from './Component/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'books',
        element: <Books />,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },

      {
        path: 'about',
        element: <About />,
      },

      {
        path: 'loader',
        element: <LoadingSpinner />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
