import styled from "styled-components"
import clc from  "../../assets/circle.svg"
import {CiSearch} from "react-icons/ci"
import {FiShoppingCart} from "react-icons/fi"
import {RiArrowDropDownLine} from "react-icons/ri"
const Header =()=>{
        return(
                <div>
<Box>
        <Main>
                <Right>
                        <Pic src={clc}/>
                        <Logo>SKilify</Logo>
                </Right>
                <Center>
<Nav>Home <Icon3>
        {/* <RiArrowDropDownLine/> */}
</Icon3>
</Nav>
<Nav>Pages  <Icon3>
        <RiArrowDropDownLine/>
</Icon3></Nav>
<Nav>Coures  <Icon3>
        <RiArrowDropDownLine/>
</Icon3></Nav>
<Nav>Featurs  <Icon3>
        <RiArrowDropDownLine/>
</Icon3></Nav>
<Nav>Blog  <Icon3>
        <RiArrowDropDownLine/>
</Icon3></Nav>
                </Center>
                <Lfet>
                        <Hloder> <Icon/></Hloder>
                        <Hloder> <Icon2/></Hloder>
                        <Hloder><Button > Register</Button></Hloder> 
                </Lfet>
        </Main>
</Box>
                </div>
        )
}

export default Header

const Icon3 = styled(RiArrowDropDownLine)`
width: 26px;
height: 26px;
/* font-size: 20px; */
/* font-weight: 200; */
display: flex;
justify-content: center;
align-items: center;
`
const Icon = styled(CiSearch)`
width: 30px;
height: 30px;
font-size: 20px;
font-weight: 300;
    color:#5F599D;
`
const Icon2 = styled(FiShoppingCart)`
width: 20px;
height: 20px;
font-size: 20px;
font-weight: 300;
    color:#5F599D;
`
const Button= styled.div`
padding: 11.9px;
color: #fff;
width: 99px;
background-color: #F56962;
display: flex;
border-radius: 3px;
border: solid 1px #F56962;
justify-content: center;
align-items: center;
`
const Pic = styled.img`
width: 22px;
height: 22px;
bottom: +13px;
left:1px;
position: absolute;
`
const Box = styled.div`
        width: 100%;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
background-color: #FEF0EF;
`
const Logo = styled.div`
/* margin: 0px 10px; */
font-size: 29px;
font-family: 700;
margin: 0px 10px;
`
const Main = styled.div`
        width: 90%;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
`
const Lfet = styled.div`
        width: 14%;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
`
const Right = styled.div`
        width: 10.4%;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
`
const Hloder= styled.div`
font-size: 15px;
       margin: 0px 10px;
`
const Nav= styled.div`
/* font-size: 15px; */
display: flex;
justify-content: center;
       margin: 0px 15px;
       color: #5F599D;
       cursor: pointer;
`
const Center= styled.div`
       width: 39%;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content:space-between;
`
