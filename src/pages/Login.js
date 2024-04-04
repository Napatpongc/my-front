import React ,{useState} from 'react'
import NAVBar from '../Components/NAVBar.js'
import '../Components/NAVBar.css'
import './Login.css'
import check from '../Pictures/check (1).png'
import Loginpng from '../Pictures/login.png'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function Login() {
    
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
      });

    const handleLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
      };

      const handleClick = (e) => {
        e.preventDefault();
        console.log("กดเเล้ว")
        if (loginData.username && loginData.password) {
          // ส่งข้อมูลการเข้าสู่ระบบไปยังเซิร์ฟเวอร์เพื่อการเข้าสู่ระบบ
          axios.post(`http://localhost:5000/login`, loginData)
            .then((response) => {
              setLoginData({  // น่าจะต้องเป็น setLoginData นะครับ
                username: "",
                password: ""
              });
              console.log("เข้าสู่ระบบสำเร็จ!");
              navigate('plan');
              // เช่น เก็บ token หรือข้อมูลผู้ใช้ใน local storage
              // นำผู้ใช้ไปยังหน้าหลักของแอปพลิเคชัน
            })
            .catch((error) => {
              // กรณีเกิดข้อผิดพลาดระหว่างการเข้าสู่ระบบ
              console.error("เข้าสู่ระบบไม่สำเร็จ:", error);
              // แสดงข้อความผิดพลาดหรือทำการจัดการข้อผิดพลาดอื่น ๆ ตามที่ต้องการ
            });
        } else {
          console.log("โปรดกรอกชื่อผู้ใช้และรหัสผ่าน");
        }
    };
  return (
    <div><NAVBar/>
        <div className='Container'>
            <div className="Header">
                <h1>Login</h1>
            </div>
            
            <div className="inputs">
                <div className="Text">
                    <text>Username</text>  
                </div>
                <div className="input">
                    <input input type="text" name="username" value={loginData.username} onChange={handleLoginInputChange} />
                </div>
                <div className="Text2">
                    <text>Password</text>
                </div>
                <div className="input">
                    <input type="password" name="password" value={loginData.password} onChange={handleLoginInputChange} />
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

export default Login