import React, {useState} from "react";
import logoo from '../Pictures/webicon.png'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import './Register'
import './Login'
import bg from '../Pictures/pexels-cats-coming-406152.jpg'
function Home(){
    const navigate = useNavigate()

    return(
    <>
        <img className="bg" src={bg} alt="bg"></img>
        <div className="hi">    
            <h2 className="w1">welcome to</h2>
            <h1 className="w2">MUSTODE CLEAN FOOD</h1>
                <div className="hi2">
                    <button1 className = "button1" onClick={() => navigate('Login')} >Login</button1>      or
                    <button2 className="button2" onClick={() => navigate('Register')}>Register</button2>
                </div>      
        </div>
        <img className="logo" src={logoo} alt="logo"></img>
    </>
    );
}
export default Home