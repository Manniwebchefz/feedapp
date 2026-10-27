import { Component } from "react";

class UserCount extends Component {
    constructor(props){
        super(props);
        this.state ={
            count: 1,
        };
        console.log("UserCount Constructor Called");
    }

    componentDidMount(){
        this.counter = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            });
        }, 1000);
        console.log( {counter: this.counter},"UserCount Component Did Mount");
    }
    componentWillUnmount(){
        clearInterval(this.counter);
        console.log("UserCount Component Will Unmount");
    }
    render() {
        const { count } = this.state;
        console.log("UserCount Render Called");
        return (
            <div className="user-count">
                <h2>User Count: {count}</h2>
                <button
                    onClick={ () =>this.setState({ count: count +1  })}>
                    Increment Count
                </button>
            </div>
        );
}
}

export default UserCount;