import React, {Component} from "react";
import LoginForm from './components/LoginForm';

class LoginPage extends Component{
    render(){
        // const user = {
        //     name : "novan",
        //     genre : "Rock"
        //  };
        return(
            // <LoginForm user={user}></LoginForm>
            <LoginForm></LoginForm>
        );
    }
}

export default (LoginPage);