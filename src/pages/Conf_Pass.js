import React ,{useState} from 'react'
import NAVBar from '../Components/NAVBar'
import '../Components/NAVBar.css'
import './Conf_Pass.css'
import './User'
import './plan'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import check from '../Pictures/check (1).png'

function Conf_Pass() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLoginInputChangep = (e) => {
        const { name, value } = e.target;
        setPassword({ ...password, [name]: value });
      };

      const handleLoginInputChangec = (e) => {
        const { name, value } = e.target;
        setConfirmPassword({ ...confirmPassword, [name]: value });
      };

      const handleClick = (e) => {
        e.preventDefault();
        console.log("กดเเล้ว")
        if (1) {
          // ส่งข้อมูลการเข้าสู่ระบบไปยังเซิร์ฟเวอร์เพื่อการเข้าสู่ระบบ
          axios.post(`http://localhost:5000/change-password`, password)
            .then((response) => {
              setPassword({  // น่าจะต้องเป็น setLoginData นะครับ
                username: "",
                password: ""
              });
              console.log("เข้าสู่ระบบสำเร็จ!");
         
            })
            .catch((error) => {
            
              console.error("เข้าสู่ระบบไม่สำเร็จ:", error);
             
            });
        } else {
          console.log("โปรดกรอกชื่อผู้ใช้และรหัสผ่าน");
        }
    };
    

    

    return (
        <div>
            <NAVBar />
            <div className='Container'>
                <div className="Header">
                    <h1>Change Password</h1>
                </div>
                <div className="Text">
                    <text>Change Password</text>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input
                            type="password"
                            name="Password"
                            value={password.password}
                            onChange={handleLoginInputChangep}
                        />
                    </div>
                    <div className="Text">
                        <text>Confirm Password</text>
                    </div>
                    <div className="input">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword.confirmPassword}
                            onChange={handleLoginInputChangec}
                        />
                    </div>
                </div>
            </div>
            <div className="button_back">
                <button onClick={() => navigate(-1)}>
                    Back
                </button>
                <div className="button_check">
                    <button onClick={handleClick}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Conf_Pass;