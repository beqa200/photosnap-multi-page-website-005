import styled from "styled-components";
const GullMainContainer =styled.div`
padding:64px 75px 64px 29px;
// display:flex;
// flex-direction:column;
// justify-content:space-between;
// align-items:center;
width:318px;
`;
const GullMainTitle = styled.h2`
width:140px;
height:16px;
font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  font-color: #000000;
  font-family: "DM Sans";
  letter-spacing:2px;
  margin-bottom:23px;
`;

const GullContainer=styled.div`

`;
const Line=styled.div`
width:318px;
height:1px;
background-color:#DFDFDF;
margin-bottom:23px;
`;
const TitleWrapper =styled.div`
width:233px;
height:16px;
margin-bottom:16px;

`;
const GullTitle=styled.h3`
font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  font-family: "DM Sans";
  letter-spacing:2px;
  font-color: #000000;
  
`;
const MenuWrapper =styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`;
const Menu=styled.div`
font-weight: 700;
  font-size: 10px;
  line-height: 13.02px;
  text-align: center;
  font-family: "DM Sans";
  letter-spacing:1.67px;
//   margin-right:16px;
  font-color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  
`;
const CheckWrapper=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:24px;
margin-top:8px;


`;
const CheckSign=styled.div`
color:#000000;
width:16px;
height:12px;
color:black;



`;









export{GullMainContainer,GullContainer,CheckWrapper, CheckSign,Menu,MenuWrapper,TitleWrapper,GullTitle,Line,GullMainTitle}