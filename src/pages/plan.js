import React, { useState, useEffect } from 'react';
import Nav from "../Components/NAVBar.js"
import "./plan.css"
import Profile from '../Pictures/login.png'
import { useNavigate } from 'react-router-dom'
import './Table.js'
import './User.js'
import axios from "axios";

function App() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [bmrString, setBmrString] = useState(""); // กำหนด state สำหรับเก็บค่า BMR ในรูปของ string

    useEffect(() => {
        axios.get('http://localhost:5000/get_data')
            .then(response => setProducts(response.data));
    }, []); 

    console.log(products.age)

    useEffect(() => {
        if (Array.isArray(products) && products.length > 0) {
            const sex = products[0].gender; 
            const weight = parseFloat(products[0].weight); 
            const age = parseInt(products[0].age); 
            const height = parseFloat(products[0].height); 
            let bmr = calculateBMR(sex, weight, age, height);
            bmr = Math.round(bmr); // ปัดค่า BMR เป็นจำนวนเต็ม
            const bmrString = bmr.toString();
            setBmrString(bmrString);
        }
    }, [products]);
    
    

    function calculateBMR(sex, weight, age, height) {
        let bmr = 0;
        if (sex === "m") {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (sex === "f") {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        return bmr;
    }

    return (
        <div>
            <Nav />
            <div className="greenbox">
                <div className='headbox'>
                    <h1 className='head1'>YOUR PLAN</h1>
                </div>
                <div className='Caloriesbox'>
                    <p className='p1'>Clories about</p>
                    <p className='highlight'>{bmrString}</p>
                    <p className='p2'>kcal</p>
                    <div className='underline'>.</div>
                </div>
            </div>
            <div className='yellow'><p className='h1'>Choose Plan For Each Day:</p></div>
            <div className="weekday">
                <button className="mon" onClick={() => navigate('Table')}><p className="day" >Mon</p></button>
                <button className="tues" onClick={() => navigate('Table')}><p className="day" >Tues</p></button>
                <button className="wed" onClick={() => navigate('Table')}><p className="day">Wed</p></button>
                <button className="thurs" onClick={() => navigate('Table')}><p className="day" >Thurs</p></button>
                <button className="fri" onClick={() => navigate('Table')}><p className="day" >Fri</p></button>
                <button className="sat" onClick={() => navigate('Table')}><p className="day" >Sat</p></button>
                <button className="sun" onClick={() => navigate('Table')}><p className="day" >Sun</p></button>
            </div>
            <div className="profile">
                <button className="pro" onClick={() => navigate('User')}>
                    <img src={Profile} />
                </button>
            </div>
        </div>
    );
}

export default App;