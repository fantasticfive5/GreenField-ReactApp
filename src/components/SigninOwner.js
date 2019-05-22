import React, { Component } from "react";
import Signincustomer from "./Signincustomer";

class SigninOwner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopname: "",
            phoneNumber: ""
        }
    }

    sentData() {
        const data = { shopname: this.state.shopname, phoneNumber: this.state.phoneNumber }

    }

    render() {
        return (
            <div className="sign">
               <h1>
                   SignIn Please !
               </h1>

            </div>
        )



    }
}