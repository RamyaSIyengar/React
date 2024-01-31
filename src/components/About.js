import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass"
import UserClass2 from "./UserClass2"
import UserContext from "../../utils/UserContex";



class About extends Component{
    constructor(props){
        super(props);

    console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent did mount")
    }


    render(){

        console.log("parent render")
        return(
        <div className="AboutClassComponent">
            <h1>About Us</h1>
            <h2>React Application</h2>
            {/* <User name={"Ram"} Location={"Ayodhya"}/> 
            <UserClass name={"Ram"} location={"Ayodhya"} />
            <UserClass name={"Krishna"} location={"Dwaraka"} />
            <UserClass name={"Hanuman"} location={"Ayodhya"} /> */}

            <UserClass2 name={"Ram"} location={"Ayodhya"} />
            <div>
                LoggedInUser <UserContext.Consumer>{({loggedInUser}) => (
                    <h1 className="text-xl font-semibold">{loggedInUser}</h1>
                )}
            </UserContext.Consumer></div>
            
        </div>
        )
    }
}



// const About = () =>{
//     return(
//         <div>
//             <h1>About Us</h1>
//             <h2>React Application</h2>
//             {/* <User name={"Ram"} Location={"Ayodhya"}/> */}
//             <UserClass name={"Ram"} location={"Ayodhya"} />
//         </div>
//     )
// }

export default About;