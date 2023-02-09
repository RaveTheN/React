import { Component, createRef } from "react";

export class UncontrolledLogin extends Component {
    _formRef = createRef()

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember =  event.target.elements.remember.checked
    }

    componentDidMount(){
        this._formRef.current.elements.username.focus();
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <input name="username"/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox"/>

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}