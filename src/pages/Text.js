import man from '../Pictures/man.png'
import girl from '../Pictures/girl.png'
import axios from "axios";

function Text() {

    
    
    const handleClickm = (e) => {
        e.preventDefault();
        console.log("is_male")
          axios.post(`http://localhost:5000/add_gender`, "m")
          
      };

      const handleClickf = (e) => {
        e.preventDefault();
        console.log("is_female")
          axios.post(`http://localhost:5000/add_gender`, "f")
      };

      const MaleButton = (<button  onClick={handleClickm} className="butMale">MALE</button>)
    const FemaleButton = (<button onClick={handleClickf} className="butFemale">FEMALE</button>)

    return (
        <div className="textGen">
            <div className="text1">
                <p>What is your gender?</p>
            </div>
            <div className="picMale"> 
                <img src={man} />
            </div>
            <div>
                {MaleButton}
            </div>
            <div className="picFemale">
                <img src={girl} />
            </div>
            <div>
                {FemaleButton}
            </div>
        </div>
    );
}

export default Text