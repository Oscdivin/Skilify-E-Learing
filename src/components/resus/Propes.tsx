import styled from "styled-components";

interface ichoice{
        img?: string,
        tetx?: string,
        title?: string,
}
const Propes: React.FC<ichoice>=({img,tetx,title})=>{
        return(
                <div>
<Box>
        <Main>
             <Chlid>   <Pic src={img}/></Chlid>
             <Chlid>   <Title>{title}</Title></Chlid>
               <Chlid> <Tesx>{tetx}</Tesx></Chlid>
        </Main>
</Box>

                </div>
        )
}

export default Propes;
const Chlid =styled.div`
margin: 7px;
`
const Box =styled.div`
width: 270px;
height: 310px;
display: flex;
justify-content: center;
align-items: center;
background-color: green;

:hover{
        background-color: blue;
};
`
const Main =styled.div`
width: 90%;
height: 90%;
justify-content: center;
display: flex;
flex-direction: column;
flex-wrap: wrap;
/* background-color: red; */
`
const Pic =styled.img`
/* width: 80px; */
/* height: 60px; */
font-size: 7px;
padding: 13px 13px;
background-color:blue;
justify-content: center;
align-items: center;
display: flex;
border-radius: 5px;
object-fit: cover;
`
const Tesx =styled.div`
width: 80px;
min-height: 10px;
background-color:blue;
justify-content: center;
display: flex;
/* margin: 10px; */
object-fit: contain;
font-size: 17px;
`
const Title =styled.div`
width: 87px;
  min-height: 10px;
background-color:blue;
justify-content: center;
display: flex;
align-items: center;
object-fit: contain;
font-size: 30px;
`