import styled from "styled-components";

const IconMainContainer=styled.div`

margin-top:80px;
margin-bottom:80px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
// margin:0 auto;
@media screen and (min-width: 768px){
    margin-top:120px;
    margin-bottom:120px;
}
@media screen and (min-width: 1440px){
    width:1110px;
    height:auto;
    display:flex;
    justify-content:space-between;
    text-align:center:
    flex-wrap:wrap;
    flex-direction:row;
    margin:0 auto;
    margin-bottom:120px;
    margin-top:120px;
}
`;
const IconsMainContainer=styled.div`
// margin-top:64px;
// margin-bottom:91px;
width:100%;
display:flex;
padding-top:24px;
padding-bottom:24px;
@media screen and (min-width: 768px){
    margin-top:120px;
    margin-bottom:120px;
    display:flex;
    flex-wrap:wrap;
    display:flex;
    justify-content:space-around;
    text-align:center;
    max-width:1300px;
    margin: auto;

    
}
@media screen and (min-width: 1440px){
    
   
}
`;

const IconContainer=styled.div`
width:350px;
height:240px;
margin-top:56px:
margin-bottom:56px;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
position:relative;

&:first-child {
    margin-bottom:56px;
}
&:last-child {
    margin-bottom:56px;
}
&:nth-child(2) {
    margin-bottom:56px;
}
}
`;

const IconDiv=styled.div`
width:71.85px;
position:absolute;
top:0;
// height:71.85px;
color:#000000;
// align-items:center;
margin:0 auto;
// margin-bottom:48.15px;
// margin:56px 159px 48.15px 144px;
@media (min-width: 768px){
    margin:0 auto;
    // margin-bottom:48.15px;
    // margin-top:56.02px;
    // position:absolute;
    // top:0;
}
@media screen and (min-width: 1440px){
    // margin:0 auto;  

}
`;
const IconTitle=styled.h2`
width:310px;
height:25px;
// padding-right:32px;
// padding-bottom:16px;
// padding-left:33px;
font-weight:700px;
font-size:18px;
line-height:25px;
text-align:center;
font-color:#000000;
font-family: 'DM Sans', sans-serif;
margin:0 auto;
position:absolute;
top:120px;
@media screen and (min-width: 768px){
    width:457px;
    margin:0 auto;
    position:absolute;
    top:120px;
}
@media screen and (min-width: 1440px){
    width:350px; 
    height:25px;
    // margin:0 auto;
    // text-align: center;
    // margin-bottom:16px;
    // margin-top:48.15px;
}

`;
const IconP = styled.p`
width:310px;
height:75px;
position:absolute;
top:161px;
margin:0 auto;
margin-bottom:56.02px;
// margin-top:16px;
font-weight:400px;
font-size:15px;
line-height:25px;
text-align:center;
font-family: 'DM Sans', sans-serif;
color:#000000;
opacity:60%;
@media screen and (min-width: 768px){
    width:457px;
    height:50px;
    margin-bottom:80px;
    margin:0 auto;
    position:absolute;
    top:161px;
}
@media screen and (min-width: 1440px){
    width:350px; 
    height:75px;
    // margin:0;
    // text-align:center;
    // margin-left:165px;
    // margin-right:30px;
}
`;
export{IconDiv , IconTitle,IconP,IconContainer,IconMainContainer,IconsMainContainer};