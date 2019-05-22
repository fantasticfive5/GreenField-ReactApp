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
                shopname : < input type="text" placeholder="Enter Your ShopName" value={this.props.shopname} name="shop" /><br></br>
                phoneNumber : < input type="Number" placeholder="Enter Your PhoneNumber" value={this.props.phoneNumber} name="number" /><br></br>
                <button onClick={() => this.props.signIn()} > SigninShop </button><br></br>

            </div>
        );



    }
}

export default SigninOwner;