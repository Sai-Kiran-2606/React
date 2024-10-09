import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
            },
        };
        // console.log("Child Constructor");
    }

    async componentDidMount() {
        // console.log("Child Component Did Mount");
        const data = await fetch("https://api.github.com/users/Sai-Kiran-2606");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }

    render(){
        // console.log("Child Render");

        const {id, login} = this.state.userInfo;

        return (
            <div className="user-card">
                <h2>ID: {id}</h2>
                <h3>Login: {login}</h3>
                <h4>Contact: saikiranreddykotha260@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;