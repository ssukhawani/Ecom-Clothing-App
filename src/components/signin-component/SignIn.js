import React from "react"

import './SignIn.style.scss'
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth,signInWithEmailAndPassword, signInWithGoogle } from "../firebase/Firebase.utils";


class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    handelChange=(evt)=>{
        
        const { value , name } = evt.target

        this.setState({[name]:value})
    }

    handelSubmit=async (event)=>{
        event.preventDefault()
        const{email,password}=this.state

        try{
          await auth.signInWithEmailAndPassword(email,password)
          this.setState({ email: "", password: "" });

        }catch(error){
          console.log(error)
        }
        
    }

    render(){
        return (
          <div className="Signin">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handelSubmit}>
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                handelChange={this.handelChange}
                label="Email"
                required
              />

              <FormInput
                type="password"
                name="password"
                value={this.state.password}
                handelChange={this.handelChange}
                label="Password"
                required
              />

              <div className="buttons">
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton
                  type="button"
                  onClick={signInWithGoogle}
                  isGoogleSignIn
                >
                  Sign in with Google
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;
