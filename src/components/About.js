import User from "./User";
import UserClass from "./UserClass"


const About = () =>{
    return(
        <div>
            <h1>About Us</h1>
            <h2>React Application</h2>
            <User name={"Ram"} Location={"Ayodhya"}/>
            <UserClass name={"Ram"} location={"Ayodhya"} />
        </div>
    )
}

export default About;