import React, { useState, useRef, useEffect } from 'react'
import NAVBar from '../Components/NAVBar'
import "../Components/NAVBar.css"
import "./User.css"
import { useNavigate } from 'react-router-dom'
import "./Conf_Pass"
import "./plan"
import axios from "axios";

import user_icon from '../Pictures/user.png'
import box from '../Pictures/round-corner.png'

function User() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // ดึงข้อมูลจาก backend โดยใช้ Axios หรือวิธีการอื่น ๆ และตั้งค่าให้กับ state
        // ตัวอย่างการใช้ Axios
        axios.get('http://localhost:5000/get_data')
            .then(response => setUserData(response.data))
            .catch(error => console.error('Error fetching user data: ', error));
    }, []);

    const inputRef = useRef(null);
    const[image, setImage] = useState("");
    const handleImageClick = () =>{
        inputRef.current.click();
    };
    const handleImageChange = (event) =>{
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    };

  return (
    <div><NAVBar/>
        <div classname='container'>
            <div className="image-upload-container">
                <div onClick={handleImageClick} style={{cursor:"pointer"}}>
                {image ? 
                    (<img src={URL.createObjectURL(image)}alt = ""  className="img-display-after" />)
                    : (<img src={user_icon} alt="" className="img-display-before"></img>)}
                    <input 
                    type="file" 
                    ref={inputRef} 
                    onChange={handleImageChange} 
                    style={{display: "none"}}>
                    </input>
                </div>
                <text>
                Username: {userData.length > 0 ? userData[0].username : ''}
                </text>
                
                <button2 onClick={() => navigate('male')}>
                    <img src={box}></img>
                    Edit plan
                </button2>
            </div>
            
        </div>
        <div className="button">
            <button3 onClick={() => navigate(-1)} >
                Back
            </button3>
        </div>
    </div>
    )
}

export default User