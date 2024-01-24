import React, { Suspense, lazy } from "react";
import ReactDOM  from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet />
        </div>
    )
}
  
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:  [{
            path:"/",
            element: <Body />
        },
            {
            path: "/About",
            element: <About />, 
        },
        {
            path: "/Contact",
            element: <Contact />
        },
        {
            path:"/restaurants/:resId",
            element: <RestroMenu/>
        },
        {
            path:"/Grocery",
            element:<Suspense><Grocery/></Suspense> 
        },
    ],
        errorElement: <Error />,
    },
   
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

//conflict driven UI
//Ui is driven by conflict- data
//carosel
