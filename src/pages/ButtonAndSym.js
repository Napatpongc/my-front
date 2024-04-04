import { useNavigate } from 'react-router-dom'
import './Home'
import './Login'
import './plan'

import task from '../Pictures/task.png'
import check from '../Pictures/check (1).png'

function ButtonAndSym(){
    const navigate = useNavigate()

    return(
        
        <>
        <button onClick={() => navigate('./plan')}>
            <div className="ok">        
                <img src={check}/>
            </div>
        </button>
        
        <div className="task">        
            <img src={task} />   
        </div>
       
        <button className="back">
            <div className="ba" onClick={() => navigate(-1)}>
                <p>Back</p>
            </div>
            
        </button>
       

        
        </>
    );
    
}

export default ButtonAndSym;