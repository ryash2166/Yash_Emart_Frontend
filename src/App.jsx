import './App.css'
import BlogThree from './Pages/BlogThree'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import ContactTwo from './Pages/ContactTwo'
import Main from './Pages/Main'
import Wishlist from './Pages/Wishlist'
import Router from './Router/Router'
import ShopNow from './Pages/ShopNow'
import Eye from './Pages/Eye'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Success from './Pages/Success'
import ErrorPage from './Pages/ErrorPage'
import { AuthenticationGuard } from "./Components/AuthenticationGuard";
import { useAuth0 } from '@auth0/auth0-react'
import PlaceHolder  from './Components/PlaceHolder'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PlaceHolder />
      </div>
    );
  }
  
  const router = createBrowserRouter([
    {
      path: '/', element: <Router />,
      children: [
        { path: '/', element: <Main /> },
        { path: 'cart', element: <Cart /> },
        { path: 'wishlist', element: <Wishlist/> },
        { path: 'contacttwo', element: <ContactTwo /> },
        { path: 'checkout', element: <AuthenticationGuard component={Checkout} /> },
        { path: 'blogthree', element: <BlogThree /> },
        { path: 'shopnow', element: <ShopNow /> },
        { path: 'success', element: <Success /> },
        { path: 'eye/:id', element: <Eye /> },
        { path: '*', element: <ErrorPage /> },
      ]
    }
  ])
  return (

    <RouterProvider router={router} />

  )
}

export default App
