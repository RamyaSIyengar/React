import React from "react";
import react from "react"
import  ReactDOM from "react-dom/client"

// React Element
const heading =  React.createElement("h1",{id:"heading"}, "React");
//react element is object, when we render this dom it will become Html element
// React.createElement => object => HTMLElement

console.log(heading)
//JSX - HTML-like or XML-like syntax

//JSX
const jsxHeading =(
    <h1 id="heading" className="head" tabIndex="5"> 
    React using JSX
    </h1>
);
console.log(jsxHeading)

const eleme =  <span> React element </span>

//Title - React element
const Title = () => (
    <h1>
        {eleme}
       Title content
    </h1>
);


// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title></Title>
        <Title />
        <h1 className="heading">React Functional Component</h1>
    </div>
     
);

//or

const HeadingComponent2 = () => <h1 className="heading">Functional Component
</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(jsxHeading);
root.render(<HeadingComponent/>)