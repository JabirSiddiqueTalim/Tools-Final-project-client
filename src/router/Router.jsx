import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: '/about',
                Component: About,
            },
            {
                path: '/contact',
                Component: Contact
            }
        ]
    }
])