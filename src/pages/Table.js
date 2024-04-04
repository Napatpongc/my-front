import React from 'react'
import NAVBar from '../Components/NAVBar'
import '../Components/NAVBar.css'
import './Table.css'
import './plan'
import { useNavigate } from 'react-router-dom'

function Table() {
    const navigate = useNavigate()
  return (
    <div><NAVBar/>
        <div className="Header">
                <h1>
                    Sample Plan
                </h1>
            </div>
            <div className="Text">
                <text>
                    Date: 
                </text>
                <text>
                    Total calories: 
                </text>
            </div>
        <div className='container'>
            <div className="Box">
                <h2>
                    Breakfast
                </h2>
                <div className="inf">
                    <text>
                        padkapow
                    </text>
                    <text>
                        Calories: 450 Kcal
                    </text>
                    <text>
                        proteins: 30 g
                    </text>
                    <text>
                        carbs: 25 g
                    </text>
                    <text>
                        fats: 20 g
                    </text>
                </div>
            </div>
            <div className="Box">
                <h2>
                    Lunch
                </h2>
                <div className="inf">
                    <text>
                    Pork Panaeng Curry
                    </text>
                    <text>
                        Calories: 650 Kcal 
                    </text>
                    <text>
                        proteins: 35 g
                    </text>
                    <text>
                        carbs: 15 g
                    </text>
                    <text>
                        fats:  30 g
                    </text>
                </div>
            </div>
            <div className="Box">
                <h2>
                    Dinner
                </h2>
                <div className="inf">
                    <text>
                    Chicken Breast Salad
                    </text>
                    <text>
                        Calories: 370 Kcal 
                    </text>
                    <text>
                        proteins: 35 g 
                    </text>
                    <text>
                        carbs: 10 g 
                    </text>
                    <text>
                        fats: 5 g 
                    </text>
                </div>
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <text>
                    Note:
                </text>
                <input placeholder="_____________________________________________________________"/>
            </div>
            <div className="input2">
                <text>
                    Weight
                </text>
                <input placeholder=" "/>
                <text>
                    kg
                </text>
            </div>
        </div>
        <div className="button" onClick={() => navigate(-1)}>
            Back
        </div>
    </div>
  );
};

export default Table