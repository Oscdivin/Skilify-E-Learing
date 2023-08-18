import styled from "styled-components";
import rain from "../assets/dots-pattern-pink.svg"
import {CiSearch} from "react-icons/ci"
import woman from "../assets/girl-img-study.webp"

const PagesLay =()=>{
        return(
                <div>
                     <Box>
        <Main>
                <RigthChild>
                        <Upchlid> Learn more and make success the result of perfection.</Upchlid>
                        <CenterChlid>
                                Pick from over 100,000 online video courses with new additions published every month. </CenterChlid>
                <Inputholder><Input placeholder="Search your favourite Course"/><Search/></Inputholder>
                <Boxchd src={rain}/>
                </RigthChild>
                <LifeChlid>
<Image src={woman}/>
<Image2 src={rain}/>


                </LifeChlid>
        </Main>
</Box>
   
                </div>
        )
}
export default PagesLay;


const Box =styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FEF0EF;
`
const Main =styled.div`
        width: 90%;
        height: 99vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
`
const RigthChild =styled.div`
        width: 49.7%;
        min-height: 10px;
        position: relative;
`
const LifeChlid=styled.div`
     width: 33%;
        height:81vh;
        display: flex;
        border: 3px solid #F68C20;
        margin-top: +9%;
        border-radius: 15px;
        justify-content: space-between;
        align-items: center;
`
const Image2=styled.img`
         width: 29%;
        height: 39vh;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
        margin: +20% -17.5%;
        margin-top: -50%;
`
const Upchlid =styled.div`
        width: 110%;
        height: 30vh;
        font-size: 59px;
        font-weight: 900;
        line-height: 64px;
        color:#212529;
`
const Image= styled.img`
             width: 110%;
        height: 80.7vh;
        margin: +20% -27%;
        margin-top: +0%;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
`
const CenterChlid =styled.div`
        width: 102%;
        height: 12vh;
      font-size: 30px;
      font-weight: 325;
        color:#5F599D;
`
const Inputholder =styled.div`
        width: 110%;
     min-height: 10vh;
        color:#ffff;
        display: flex;
`
const Input =styled.input`
        width: 88%;
        height: 25px;
        background-color: #ffffffff;
        padding: 16px;
border-radius: 5px 0px 0px 5px;
        outline: none;
        font-size: 17px;
        font-weight: 400;
        border: solid 1px #ffffffff;
`
const Search=styled(CiSearch)`
width: 10%;
padding: 9px;
font-size: 40px;
font-weight: 500;
border: solid 1px #F56962;
display: flex;
background-color: #F56962;
align-items: center;
justify-content: center;
align-items: center;
border-radius: 0px 5px 5px 0px;
`
const Boxchd =styled.img`
        width: 114px;
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit:cover;
        left: -11%;
        bottom: -51%;
        color:#ffff;
        position: absolute;
        /* flex-wrap: wrap; */
`
