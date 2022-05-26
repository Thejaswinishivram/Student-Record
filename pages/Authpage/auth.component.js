import React from "react";
import { firebaseAuth } from "../../backend/firebase-handler";
import './auth.styles.css';
import {createUserWithEmailAndPassword}from "firebase/auth";
import {useState} from'react';
function AuthpPage(){
   
        const [userInput,setUserInput]=useState({emailId:'',password:""})
        const handleClick= async()=>
        {
          try{
          await createUserWithEmailAndPassword(firebaseAuth,userInput.emailId,userInput.password);
          alert("account created");
          }catch(err){
            alert(err)
          }
        }
        const handleChange=(event)=>{
          const {name , value}=event.target;
          setUserInput({
            ...userInput,
            [name]:value
          })
          
        }
      
        return (
          <div className="auth-page-container">
              <div className="input-container">
            <input className="inputs" placeholder='Email id' name='emailId' type={'email'} value={userInput.emailId} onChange={handleChange}/>
            <input className="inputs" placeholder='Password' name='password' type={'password'} value={userInput.password} onChange={handleChange}/>
            <button className="create-account-button" onClick={handleClick}>Create Account</button>
            </div>
          </div>
        );
      }

export default AuthpPage;