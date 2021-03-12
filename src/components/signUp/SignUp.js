import React from 'react'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { auth, createNewUserProfile } from "../firebase/Firebase.utils";

import './SignUp.style.scss'


class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }   

    handelChange=(event)=>{
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    handelSubmit=async(event)=>{
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;
        if(password != confirmPassword){
            window.alert("Password don't Match")
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)  //this line gives an object where user is key so we are desturing it
            await createNewUserProfile(user, { displayName });

            this.setState({
              displayName: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
        }catch(error){
            console.error(error)
        }

    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return (
          <div className="sign-up">
            <h2 className="title">Don,t have an Account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={this.handelSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={this.handelChange}
                label="Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handelChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                onChange={this.handelChange}
                label="Password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handelChange}
                label="Confirm Password"
                required
              />
              <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
          </div>
        );
    }
}

export default SignUp;