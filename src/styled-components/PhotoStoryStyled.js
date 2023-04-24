import styled from "styled-components";

const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: ${({ ordering }) => ordering};
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

const TextContainer = styled.div`
  position: relative;
  padding-top: 32px;
  padding-left: 33px;
  padding-right: 24px;
  width: 375px;
  height: 650px;
  box-sizing: border-box;
  padding-bottom: 72px;

  @media screen and (min-width: 768px) {
    width: 495px;
    height: 650px;
    padding: 173px 54px 173px 54px;
    grid-column: 1;
  }
  @media screen and (min-width: 1440px) {
    width: 610px;
    height: 650px;
  }
`;
const ImgWrapper = styled.div`
  @media (min-width: 768px) {
    .noneDiv{
      display:none;
    }
    display: flex;
    height: 650px;
    background-size:cover;
    background-repeat: no-repeat;
  
    // display:${({none}) =>none};
    background-image:url(${({bg})=>bg});
  }
  @media screen and (min-width: 1440px) {
    width: 830px;
    height: 650px;
  }
`;
const Image = styled.img`
  @media (min-width: 768px) {
    width: 273px;
    height: 650px;
    object-fit: cover;
    object-position: 35% 100%;
  }
  @media (min-width: 1440px) {
    width: 830px;
    height: 650px;
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
const IconWrapper = styled.div`
display:flex:
height:15px;
margin-top:23px;
grid-column: 2;
}

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
  Image,
};
