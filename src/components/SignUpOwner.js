import React, { Component } from 'react';
//  import { Button, Modal, OverlayTrigger, Popover, Tooltip, Nav, NavItem, Row, Col, FormGroup, FieldGroup, Checkbox,Form } from 'react-bootstrap'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.changed = this.changed.bind(this);
        this.state = {
            firstName: "",
            lasttName: "",
            email: "",
            password: ""
        }

    }

    changed(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div>
                <input type="text" name="firstName" placeholder="Enter Your FirstName" onChange={this.changed.bind(this)} />
                <input type="text" name="lasttName" placeholder="Enter Your LastName" onChange={this.changed.bind(this)} />
                <input type="text" name="email" placeholder="Enter Your email" onChange={this.changed.bind(this)} />
                <input type="password" name="password" placeholder="Enter Your Password" onChange={this.changed.bind(this)} />

            </div>



        )
    }


}

export default SignUp;