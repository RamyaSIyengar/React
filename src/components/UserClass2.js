import React from "react";

class UserClass2 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Dummy",
                location: "default",
            }
        };
    }

 async componentDidMount(){
        //API call
        const data = await fetch("https://api.github.com/users/RamyaSIyengar")
        const json =  await data.json();
       
    
        
this.setState({
    userInfo:json,
})
console.log(json);
 }
 
componentDidUpdate(){
    console.log("Component did Update")
}

componentWillUnmount(){
    console.log("Component Unmounted")
}
render() {

    const {name,location,avatar_url} = this.state.userInfo;

    // debugger;
    return(
        <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
        </div>
    )
}
}

export default UserClass2;