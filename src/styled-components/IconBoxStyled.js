import styled from "styled-components";

const IconMainContainer = styled.div`

margin-top:80px;
margin-bottom:80px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
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
const IconsMainContainer = styled.div`
  display: flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
  margin-top: 64px;
  margin-bottom: 91px;
  @media screen and (min-width: 768px) {
    margin-bottom: 112px;
    margin:112px auto;
    flex-direction:row;
    flex-wrap:wrap;
    width:691px;
    &:nth-child(2) {
        margin-right:13px;
    }
  }
  @media screen and (min-width: 1440px) {
    width:1110px;
    height:576px;
    margin-top: 160px;
    margin-bottom: 160px;
  }
`;

const IconContainer = styled.div`
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
&:nth-child(3) {
    margin-bottom:56px;
}
&:nth-child(4) {
    margin-bottom:56px;
}
&:nth-child(5) {
    margin-bottom:56px;
}
&:nth-child(6) {
    margin-bottom:56px;
}
&:nth-child(2) {
    margin-bottom:56px;
}
}
@media(min-width:768px){
    flex:${({flex})=>flex};
    max-width:${({width})=>width};
    height:${({height}) =>height};
}
`;

const IconDiv = styled.div`
  width: 71.85px;
  position: absolute;
  top: 0;
  color: #000000;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;
const IconTitle = styled.h2`
  width: 310px;
  height: 25px;
  font-weight: 700px;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  font-color: #000000;
  font-family: "DM Sans",sans-serif;
  margin: 0 auto;
  position: absolute;
  top: 120px;
  @media screen and (min-width: 768px) {
    width: 457px;
    margin: 0 auto;
    position: absolute;
    top: 120px;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 25px;
  }
`;
const IconP = styled.p`
  width: 310px;
  height: 75px;
  position: absolute;
  top: 161px;
  font-weight: 400px;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  font-family: "DM Sans", sans-serif;
  color: #000000;
  opacity: 60%;
  @media screen and (min-width: 768px) {
    width: 340px;
    height: 50px;
    position: absolute;
    top: 161px;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 75px;
  }
`;
export {
  IconDiv,
  IconTitle,
  IconP,
  IconContainer,
  IconMainContainer,
  IconsMainContainer,
};
