import styled from "styled-components";
const GullMainContainer = styled.div`
  width: 318px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 689px;
    padding: 64px 40px 112px 39px;
  }
  @media (min-width: 1440px) {
    width: 731px;
    margin-bottom: 160px;
  }
`;
const CompareTitle = styled.h1`
  display: none;
  @media (min-width: 768px) {
    display: blocK;
    width: 689px;
    height: 48px;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    font-family: "DM Sans";
    letter-spacing: 4.17px;
    color: #000000;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 64px;
    @media (min-width: 1440px) {
      width: 540px;
      margin-top: 40px;
    }
  }
`;
const GullMainTitle = styled.h2`
  width: 140px;
  height: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  color: #000000;
  font-family: "DM Sans";
  letter-spacing: 2px;
  margin-bottom: 23px;
  @media (min-width: 768px) {
    width: 140px;
    height: 16px;
  }
  @media (min-width: 1440px) {
    width: 731px;
    margin-inline-end: auto;
  }
`;

const GullContainer = styled.div``;
const Line = styled.div`
  height: 1px;
  background-color: #dfdfdf;
  margin-bottom: 23px;
  @media (min-width: 768px) {
    width: 689px;
  }
  @media (min-width: 1440px) {
    width: 731px;
  }
`;

const BlackLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000000;
  margin-bottom: 23px;
  @media (min-width: 768px) {
    width: 689px;
  }
  @media (min-width: 1440px) {
    width: 731px;
  }
`;
const TitleWrapper = styled.div`
  width: 272px;
  height: 16px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-right: 90px;
    width: 233px;
  }
`;
const GullTitle = styled.h3`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  font-family: "DM Sans";
  letter-spacing: 2px;
  color: #000000;
  @media (min-width: 768px) {
    width: 233px;
    margin-right: 50px;
  }
`;
const MenuWrapper = styled.div`
  width: 272px;
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
  font-family: "DM Sans";
  letter-spacing: 1.67px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  width: 140px;
`;
const CheckWrapper = styled.div`
  display: flex;
  gap: 75px;
  width: 62%;
  flex-direction: row-reverse;
  margin-bottom: 24px;
  margin-top: 8px;
  @media (min-width: 768px) {
    gap: 100px;
    margin-right: 30px;
  }
  @media (min-width: 1440px) {
    gap: 105px;
    margin-right: 70px;
  }
`;
const CheckSign = styled.div`
  color: #000000;
  width: 16px;
  height: 12px;
  color: black;
  gap: 70px;
`;
const TabletContainer = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
  }
`;
const TabletMenuWrapper = styled.div`
  width: 272px;
  @media (min-width: 336px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
    display: flex;
    margin-left: 320px;
    align-items: center;
    margin-bottom: 16px;
    gap: 82px;
  }
`;
const TabletMenuContainer = styled.div`
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  @media (min-width: 768px) {
    width: 689px;
    flex-direction: column;
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
  BlackLine,
  GullMainTitle,
  TabletContainer,
  TabletMenuContainer,
  TabletMenuWrapper,
  CompareTitle,
};
