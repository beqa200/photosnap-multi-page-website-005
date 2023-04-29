import styled from "styled-components";
const GullMainContainer = styled.div`
  width: 318px;
  padding: 64px 75px 64px 29px;
  margin: 0 auto;
  // display:flex;
  // flex-direction:column;
  // justify-content:space-between;
  // align-items:center;

  @media (min-width: 768px) {
    width: 689px;
    padding: 64px 40px 112px 39px;
  }
`;
const GullMainTitle = styled.h2`
  width: 140px;
  height: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  font-color: #000000;
  font-family: "DM Sans";
  letter-spacing: 2px;
  margin-bottom: 23px;
`;

const GullContainer = styled.div``;
const Line = styled.div`
  width: 318px;
  height: 1px;
  background-color: #dfdfdf;
  margin-bottom: 23px;
  @media (min-width: 768px) {
    width: 689px;
  }
`;
const TitleWrapper = styled.div`
  width: 233px;
  height: 16px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-right: 104px;
    // margin-left:63px;
    width: 233px;
    // text-align:center
  }
`;
const GullTitle = styled.h3`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  font-family: "DM Sans";
  letter-spacing: 2px;
  font-color: #000000;
  @media (min-width: 768px) {
    width: 233px;
    margin-right:50px;
  }
`;
const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Menu = styled.div`
  font-weight: 700;
  font-size: 10px;
  line-height: 13.02px;
  text-align: center;
  font-family: "DM Sans";
  letter-spacing: 1.67px;
  //   margin-right:16px;
  font-color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  //   @media(min-width:768px){
  //     display:none;
  width:140px;

  // }
`;
const CheckWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 8px;
  @media (min-width: 768px) {
    width: 423px;
    justify-content: space-between;
    align-items: center;
  }
`;
const CheckSign = styled.div`
  color: #000000;
  width: 16px;
  height: 12px;
  color: black;
`;
const TabletContainer = styled.div`
  // display:flex;
  // flex-direction:row;
  // justify-content:space-between;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const TabletMenuWrapper = styled.div`
@media(min-width:336px){
    display:none;
  @media (min-width: 768px) {
    display: block;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:16px;
    

  }
`;
const TabletMenuContainer = styled.div`
  display: flex;
//   justify-content: space-between;
  align-items: center;
  
  }
`;

export {
  GullMainContainer,
  GullContainer,
  CheckWrapper,
  CheckSign,
  Menu,
  MenuWrapper,
  TitleWrapper,
  GullTitle,
  Line,
  GullMainTitle,
  TabletContainer,
  TabletMenuContainer,
  TabletMenuWrapper
};
