import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);

        //this.state
        this.state = {
            count: 0,
            // count2:9
         };
         console.log(this.props.name +"Child Constructor")
    }

    componentDidMount(){
        console.log(this.props.name +"child did mount")
    }

    render(){
        // const {count2} = this.state;

        console.log(this.props.name +" child render")
        return(
            <div className="user-card">
                <h1>Count:{this.state.count}</h1>
                <button
                 onClick={() =>{
                    //Never update state variable directly 
                    this.setState ({
                        count : this.state.count+1,
                    });
                }}>Click here</button>
                
                <h1>Count:{count2}</h1>
                <h2>Name:{this.props.name}</h2>
                <h3>Location:{this.props.location}</h3>
            </div>
        )
    }
}

export default UserClass;