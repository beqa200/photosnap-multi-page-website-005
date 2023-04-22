import styled from "styled-components";

const Container = styled.div`
  width: 375px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 768px;
    height:650px;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1020px){
    width: 1020px;
    height:650px;
  }
`;

const TextContainer = styled.div`
  padding-top: 32px;
  padding-left: 33px;
  padding-right: 24px;
  // padding-bottom:16px;
  width: 375px;
  height: auto;
  box-sizing: border-box;
  padding-bottom: 72px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 495px;
    padding: 173px 54px 173px 54px;
    grid-column: 1;
  }
  @media screen and (min-width: 1020px){
    width: 387px;
    height:650px;
  }
`;
const ImgWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 273px;
    height: 650px;
    order: 1;
    flex: 1;
  }
  @media screen and (min-width: 1020px){
    width: 830px;
    height:650px;
  }
`;
const IconWrapper = styled.div`
height:15px;
margin-top:23px;
grid-column: 2;
}

`;
const Stick = styled.div`
  position: absolute;
  width: 128px;
  height: 6px;
  top: 0;
  left: 33px;
  background: linear-gradient(
    26.57deg,
    #ffc593 0%,
    #bc7198 43.29%,
    #5a77ff 83.33%
  );
  @media screen and (min-width: 768px) {
    width: 6px;
    height: 304px;
    top: 173px;
    left: 0;
  }
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 3.33px;
  color: #ffffff;
`;
const BlackTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 3.33px;
  color: #000000;
`;
const Text = styled.p`
  color: #ffffff;
  font-size: 15px;
  line-height: 25px;
`;
const BlackText = styled.p`
  color: #000000;
  font-size: 15px;
  line-height: 25px;
`;
const Invite = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  color: #ffffff;
  margin-right: 18px;
`;
const BlackInvite = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  color: #000000;
  margin-right: 18px;
`;

const Icon = styled.img`
  fill: #ffffff;
  max-width: 41px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    max-width: 100%;
    height: 100%;
    object-fit:contain;
  }
  @media screen and (min-width: 1020px){
    width: 830px;
    height:650px;
  }
`;

export {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
  Icon,
  IconWrapper,
  BlackTitle,
  BlackText,
  BlackInvite,
  Stick,
  ImgWrapper,
};
