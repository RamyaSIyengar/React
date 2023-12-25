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
         React.createElement("h1",{}, "Hii, h1 tag"),
         React.createElement("h2",{},"sidechick"),
        ]),
    React.createElement("div",{id:"child2"},[
         React.createElement("h3",{}, "Hii, h3 tag"),
         React.createElement("h4",{},"sidechick"),
        ]),

    ]);
    root.render(parent)