import React from 'react';
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
  ImgWrapper,
  ImageDiv, 
  Stick
} from "../styled-components/PhotoStoryStyled";
import Beta from '../components/Beta';
import Price from '../components/Price';
import Gull from '../components/Gull';


export default function Pricing(props) {
  return (
    <>
     <Container style={{ backgroundColor: '#000000' }} ordering='row-reverse'>
        <ImgWrapper>
          <ImageDiv src={props.images[5].pathD} alt={props.images[5].alt} />
        </ImgWrapper>
        <TextContainer ptop="72px" pbot="72px">
          <Stick />
          <Title>{props.images[5].title}</Title>
          <Text>{props.images[5].text}</Text>
        </TextContainer>
      </Container>
      <Price />
       <Gull/>
       <Beta />
    </>
  )
}
