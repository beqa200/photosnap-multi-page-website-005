import styled from "styled-components";

const IconMainContainer=styled.div`
margin-top:80px;
margin-bottom:34px;
@media screen and (min-width: 768px){
    margin-top:66px;
    margin-bottom:120px;
}
@media screen and (min-width: 1440px){
    display:flex;
    justify-content:space-around;
    text-align:center:
}
`;
const IconsMainContainer=styled.div`
margin-top:64px;
margin-bottom:91px;
@media screen and (min-width: 768px){
    margin-top:120px;
margin-bottom:120px;
`;

const IconContainer=styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

}
`;

const IconDiv=styled.div`
width:71.85px;
// height:71.85px;
color:#000000;
align-items:center;
margin:0 auto;
margin-bottom:48.15px;
// margin:56px 159px 48.15px 144px;
@media (min-width: 768px){
    margin:0 auto;
    margin-bottom:48.15px;
    margin-top:56.02px;
}
@media screen and (min-width: 1440px){
    margin:0 auto;  

}
`;
const IconTitle=styled.h2`
width:310px;
height:25px;
padding-right:32px;
padding-bottom:16px;
padding-left:33px;
font-weight:700px;
font-size:18px;
line-height:25px;
text-align:center;
font-color:#000000;
font-family: 'DM Sans', sans-serif;
margin:0 auto;
@media screen and (min-width: 768px){
    width:457px;
    margin:0 auto:
}
@media screen and (min-width: 1440px){
    width:350px; 
    height:25px;
    margin:0 auto;
    text-align: center;
    margin-bottom:16px;
    margin-top:48.15px;
}

`;
const IconP = styled.p`
width:310px;
height:75px;
margin:0 auto;
margin-bottom:56.02px;
padding-top:16px;
font-weight:400px;
font-size:15px;
line-height:25px;
text-align:center;
font-family: 'DM Sans', sans-serif;
opacity:60%;
@media screen and (min-width: 768px){
    width:457px;
    height:50px;
    margin-bottom:80px;
    margin:0 auto;
    // margin-left:155px;
}
@media screen and (min-width: 1440px){
    width:350px; 
    height:75px;
    margin:0;
    text-align:center;
    // margin-left:165px;
    // margin-right:30px;
}
`;
export{IconDiv , IconTitle,IconP,IconContainer,IconMainContainer,IconsMainContainer};