import Propes from "../components/resus/Propes";
import icons from "../assets/camera.svg"
import bagicons from "../assets/briefcase.svg"
import lap from "../assets/cast.svg"
import io from "../assets/check-point.svg"
import uio from "../assets/heart.svg"
import laptop from "../assets/monitor.svg"
import pantone from "../assets/pantone.svg"
import shake from "../assets/shake.svg"
import styled from 'styled-components';
const Choice=()=>{
        return(
                <div>

<Box>
        <Main>
                        
<Propes title="Design" tetx=" Design" img={pantone}/>
<Propes tetx=" "title="" img={lap}/>
<Propes tetx=" " title="" img={icons}/>
<Propes tetx=" " title="" img={bagicons}/>
<Propes tetx=" " title="" img={io}/>
<Propes tetx=" " title="" img={uio}/>
<Propes tetx=" " title="" img={laptop}/>
<Propes tetx=" " title="" img={shake}/>
        </Main>
</Box>
</div>
        )
}

export default Choice;

const Main=styled.div`
width: 89%;
min-height: 80vh;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
/* flex-direction: column; */

`
const Box =styled.div`
width: 100%;
height: 97vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #000; */

`

