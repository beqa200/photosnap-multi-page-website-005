import styled from "styled-components";

 const Container= styled.div`
width:375px;
height:auto;
// background-color:#000000;
`;
// const Image =styled.img`
// width:375px;
// height:562px;
// `;
const TextContainer=styled.div`
padding-top:32px;
padding-left:33px;
padding-right:24px;
// padding-bottom:16px;
width:375px;
height:auto;
box-sizing:border-box;
padding-bottom:72px;
position:relative;
`;
const Stick=styled.div`
position: absolute;
width:128px;
height:6px;
top:0;
left:33px;
background:linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
`;
const Title =styled.h1`
font-weight:700;
font-size:32px;
line-height:40px;
letter-spacing:3.33px;
color:#ffffff;
`;
const BlackTitle =styled.h1`

font-weight:700;
font-size:32px;
line-height:40px;
letter-spacing:3.33px;
color:#000000;
`;
const Text=styled.p`
color:#ffffff;
font-size:15px;
line-height:25px;
`;
const BlackText=styled.p`
color:#000000;
font-size:15px;
line-height:25px;
`;
const Invite=styled.div`
font-weight:700;
font-size:12px;
line-height:15.62px;
color:#ffffff;
margin-right:18px;
`;
const BlackInvite=styled.div`
font-weight:700;
font-size:12px;
line-height:15.62px;
color:#000000;
margin-right:18px;


`;
const Icon =styled.img`
fill: #ffffff;
width:41px;
margin-right: 10px;

  
`;
const ImageWrapper =styled.div`
display:flex;
height:20px;
margin-top:23px;
}

`;


export {Container,Title,TextContainer, Text,Invite,Icon,ImageWrapper,BlackTitle,BlackText,BlackInvite,Stick}
