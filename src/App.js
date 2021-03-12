import React from 'react'
import './App.css';
import HomePage from './pages/homepage/Homepage'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/shoppage/ShopPage';
import {Header} from './components/header/Header';
import {SignInSignUp} from './pages/signin-signup-page/SignIn-SignUp';
import {
  auth,
  createNewUserProfile,
} from "./components/firebase/Firebase.utils";



class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      currentuser:null
    }

}

  unsubscribeFromAuth = null;



componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef = await createNewUserProfile(userAuth)

      userRef.onSnapshot(snapShot=> {
        this.setState({
          currentuser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        })

      })

      
    }else{
      this.setState({
        currentuser:null 
      })
    }
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth()
}

  render(){
    return (
      <div className="App">
        <Header currentuser={this.state.currentuser}/>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>

      </div>
    );

  }
  
}

export default App;
