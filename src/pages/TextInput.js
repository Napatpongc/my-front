import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './male.css';
import axios from "axios";
import './plan'

function TextInput() {
    const navigate = useNavigate()
    const [Data, setData] = useState({
        weight: "",
        height: "",
        age: ""
      });

    const handleRegisterInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
      };
    

    const textInput1 =  <input type="text" name="weight" value={Data.weight} onChange={handleRegisterInputChange} />
    const textInput2 =  <input type="text" name="height" value={Data.height} onChange={handleRegisterInputChange}/>
    const textInput3 =  <input type="text" name="age" value={Data.age} onChange={handleRegisterInputChange}/>
    

     

      const handleClick = (e) => {
        e.preventDefault();
        console.log("yeah")       
          console.log("ลงทะเบียนสำเร็จ!");
          axios.post(`http://localhost:5000/data`, Data)
          .then(() => {
              setData({
                  weight: "",
                  height: "",
                  age: ""
              });
          })
      };

    

    return ( 
        
        <div className="Input">
            <div className="Weight">
                <div className="w">
                    <p>Weight</p>
                <div/>               
                <div className="t1">
                    <p>{textInput1}</p>
                <div/>
                <div className="k">
                    <p>Kg</p>
                </div>
            </div>       
        </div>
        </div>
            <div className="Height">
                <div className="h">
                    <p>Height</p>
                <div/>               
                <div className="t2">
                    <p>{textInput2}</p>
                <div/>
                <div className="m">
                    <p>CM</p>
                </div>
            </div>
        </div> 
            </div>
            <div className="Age">
                <div className="a">
                    <p>Age</p>
                <div/>               
                <div className="t3">
                    <p>{textInput3}</p>
                <div/>
                <div className="y">
                    <p>Years old</p>
                </div> 
                <button onClick={handleClick} >SUBMIT</button>
                </div>               
            </div>
            </div>        
        </div>
        
        
    );
}

export default TextInput;