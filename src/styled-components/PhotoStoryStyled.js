import styled from "styled-components";

const Container = styled.div`
  width: 375px;
  margin: auto;
  background-color: ${({ transparentColor }) => transparentColor};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: ${({ ordering }) => ordering};
    min-height: 650px;
    width: 768px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${({ bg }) => bg});
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 650px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${({ bg }) => bg});
    background-color: url(${({ transparentColor }) => transparentColor});
  }
`;

const TextContainer = styled.div`
  position: relative;
  padding-top: ${({ptop}) => ptop};
  padding-bottom: ${({pbot}) => pbot};
  padding-left: 33px;
  padding-right: 24px;
  width: 375px;
  box-sizing: border-box;
  background-color: ${({ bgColor }) => bgColor};
  @media screen and (min-width: 768px) {
    // display:flex;
    width: 495px;
    height: 650px;
    padding: 173px 54px 173px 54px;
    grid-column: 1;
    background-color: ${({ transparentColor }) => transparentColor};
  }
  @media screen and (min-width: 1440px) {
    width: 610px;
    height: 650px;
  }
`;
const ImgWrapper = styled.div`
width:375px;
height:317px;

  @media (min-width: 768px) {
    .noneDiv {
      display: none;
    }
    width:273px;
    height:650px;
  }
  
  @media screen and (min-width: 1440px) {
    .noneDiv {
      display: none;
    }
    width: 830px;
    height: 650px;
    background-image:url("./assets/stories/desktop/moon-of-appalacia.jpg");
  }
`;
const ImageDiv = styled.img`
    width:375px;
    height:100%;
  @media (min-width: 768px) {
    width: 273px;
    height:100%;
    object-fit: cover;
    object-position: 47% 100%;
   
  }
  @media (min-width: 1440px) {
    width: 830px;
    height: 100%;
    object-position: 35% 100%;
  }
`;

const Stick = styled.div`
// margin-top:-4px;
  position: absolute;
  width: 128px;
  height: 6px;
  top: -1px;
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
  width: ${({wd}) => wd};
`;
const Text = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  margin-top: 16px;
  opacity: 0.6;
`;
const BlackText = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  margin-top: 16px;
  opacity: 0.6;
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
const IconWrapper = styled.div`
display:flex;
height: 10px;
margin-top:23px;
grid-column: 2;
`;

const Icon = styled.img`
  fill: #ffffff;
  max-width: 41px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (min-width: 1440px) {
    max-width: 100%;
    height: 100%;
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
  ImageDiv,
};
