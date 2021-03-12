import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDRDHUvhpO8lAP-202W8ZgiacNuTP72ttQ",
  authDomain: "crown-clothing-db-997f3.firebaseapp.com",
  projectId: "crown-clothing-db-997f3",
  storageBucket: "crown-clothing-db-997f3.appspot.com",
  messagingSenderId: "1078354456151",
  appId: "1:1078354456151:web:951adc46a74ccddfdbfd12",
  measurementId: "G-NS4W7FX1CN",
};

export const createNewUserProfile = async (userAuth,additionalData)=>{

  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  // console.log(snapShot)

  if(!snapShot.exists){
    const {displayName,email} = userAuth
    var createDate = new Date()

    try{
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData
      })
    }catch(err){
      console.log("Error creating a user ", err.message)
    }
  }
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"})
export const signInWithGoogle = ()=> firebase.auth().signInWithPopup(provider)

 
export default firebase; 

