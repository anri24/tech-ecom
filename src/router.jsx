import { createBrowserRouter } from "react-router-dom";
import UserLayout from "./users/layout/UserLayout";
import Dashboard from "./users/views/Dashboard";
import ProductDetails from "./users/views/ProductDetails";
import About from "./users/views/About";
import Contact from "./users/views/Contact";
import Wishlist from "./users/views/Wishlist";
import Cart from "./users/views/Cart";
import NotFound from "./NotFound";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import CreateProduct from "./users/views/CreateProduct";


const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/product/:id',
                element: <ProductDetails />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/wishlist',
                element: <Wishlist />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/product_create',
                element: <CreateProduct />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
    
])

export default router;