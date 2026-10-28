import { Component } from "react";

class Profile extends Component {
    constructor(props) {   
        super(props);
        this.state = {
            userInfo: { 
                name: "Dummy",
            },
        };
        // console.log( "Child  Constructor Called");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Manniwebchefz");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        // console.log( "API call Child Component Did Mount");
    }

     componentWillUnmount(){
         console.log("Child Component Will Unmount");
     }   

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        // console.log({userInfo: name}, "Child Render Called");
        return (
            <div className="profile">
                <h2>Team</h2>   
                <p>Name: {name}</p>
            </div>
        );
    }
}

export default Profile;