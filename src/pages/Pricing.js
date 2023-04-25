import React from 'react';
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
  ImgWrapper,
  ImageDiv
} from "../styled-components/PhotoStoryStyled";
import Beta from '../components/Beta'


export default function Pricing(props) {
  return (
    <>
     <Container style={{ backgroundColor: '#000000' }}>
        <ImgWrapper>
          <ImageDiv src={props.images[5].path} alt={props.images[5].alt} />
        </ImgWrapper>

        <TextContainer>
          <Title>{props.images[5].title}</Title>
          <Text>{props.images[5].text}</Text>
        </TextContainer>
      </Container>
       <Beta />
    </>
  )
}
