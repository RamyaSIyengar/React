import React from "react";
import  ReactDOM from "react-dom/client";
// import  ReactDOM from "react-dom";
// Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".

const heading = React.createElement(
    "h1", 
    {id: "heading"},
    "Hello World from React")
    
    console.log(heading) // react object
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);//take the object (heading) and convert it into heading tag and put it up in DOM

//nested
// div
// div
// h1
// h2 - siblings
const parent = React.createElement("div",{id:"parent"}, [
         React.createElement("div",{id:"child"},[
         React.createElement("h1",{}, "npm magic"),
         React.createElement("h2",{},"npx"),
        ]),
    React.createElement("div",{id:"child2"},[
         React.createElement("h3",{}, "parcel"),
         React.createElement("h4",{},"sidechick"),
        ]),

    ]);
    root.render(parent)