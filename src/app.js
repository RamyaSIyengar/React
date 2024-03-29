import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import Cart from "./components/Cart";
import UserContext from "../utils/UserContex";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
//lazy loading
const Grocery = lazy(() => import("./components/Grocery"))



const AppLayout = () => {

   //Authentication

   const [userName, setUserName] = useState();

   useEffect(() => {
    //Make an API call and send username and Passwd
    const data = {
        //dummy data
        name:"Ramya S"

    };
    setUserName(data.name)
   }, [])


    return (
        <Provider store= {appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header/>
            <Outlet />
        </div>
    </UserContext.Provider>
        </Provider>
    
        
    )
}
  
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:  [{
            path:"/",
            element:<Body /> 
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
            element:<Suspense fallback={<h1>Loading .....</h1>}><Grocery/></Suspense> 
        },
       {
        path:"/cart",
        element: <Cart />
       }
    ],
        errorElement: <Error />,
    },
   
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

//conflict driven UI
//Ui is driven by conflict- data
//carosel
