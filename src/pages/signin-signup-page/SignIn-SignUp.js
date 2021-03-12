import React from 'react'

import './SignIn-SignUp.style.scss'
import SignIn from '../../components/signin-component/SignIn'
import SignUp from '../../components/signUp/SignUp'

const SignInSignUp= ()=>(

    <div className="signIn-signUp">
        <SignIn/>
        <SignUp/>
    </div>
)

export {SignInSignUp};