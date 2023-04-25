import React from "react";
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

export default function Features(props) {
  return (
    <>
      <Container style={{ backgroundColor: '#000000' }}>
        <ImgWrapper>
          <ImageDiv src={props.images[4].path} alt={props.images[4].alt} />
        </ImgWrapper>

        <TextContainer>
          <Title>{props.images[4].title}</Title>
          <Text>{props.images[4].text}</Text>
        </TextContainer>
      </Container>
            <Beta />
    </>
  );
}
