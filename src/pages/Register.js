import React ,{useState} from 'react'
import NAVBar from '../Components/NAVBar.js'
import "../Components/NAVBar.css"
import "./Register.css"
import check from '../Pictures/check (1).png'
import Loginpng from '../Pictures/login.png'
import './male'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function Conf_Pass() {

    const navigate = useNavigate() 

    const [registerData, setRegisterData] = useState({
        username: "",
        password: "",
        gender: "m",
        weight: " 50",
        height: "50 ",
        age: "50"
       

      });
    
      const handleRegisterInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
      };


       const handleClick = (e) => {
        e.preventDefault();
        console.log("yeah")
        if (registerData.username && registerData.password) {
            
          console.log("ลงทะเบียนสำเร็จ!");
          // ส่งข้อมูลการลงทะเบียนไปยังเซิร์ฟเวอร์เพื่อการลงทะเบียน
          axios.post(`http://localhost:5000/register`, registerData)
          .then(() => {
              setRegisterData({
                  username: "",
                  password: ""
              });
          })
          navigate('male');

        } else {
          console.log("โปรดกรอกชื่อผู้ใช้และรหัสผ่าน");
        }
      };

  return (
    <div><NAVBar/>
        <div className='Container1'>
            <div className="Header1">
                <h1>Register</h1>
                </div>
                <div className="Text1">
                    <text>Username</text>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" name="username" value={registerData.username} onChange={handleRegisterInputChange} />
                </div>
                <div className="Text2">
                    <text>Password</text>
                </div>
                <div className="input">
                    <input type="password" name="password" value={registerData.password} onChange={handleRegisterInputChange}/>
                </div>
                
            </div>
        </div>
        <div className="button_back">
            <button1 onClick={() => navigate(-1)}>
                Back
            </button1>
            <div className="button_check">
                <button3 onClick={handleClick}>
                    <img src={check}></img>
                </button3>
            </div>
        </div>
            <div>
                <img className='Loginpng' src={Loginpng}></img>
            </div>
    </div>
  );
};

export default Conf_Pass