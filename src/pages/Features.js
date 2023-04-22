import React from "react";
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
} from "../styled-components/PhotoStoryStyled";

export default function Features(props) {
  return (
    <>
      <Container>
        <div className="ImgWrapper">
          <img src={props.images[4].path} alt={props.images[4].alt} />
        </div>

        <TextContainer>
          <Title>{props.images[4].title}</Title>
          <Text>{props.images[4].text}</Text>
          <Invite>{props.images[4].invite}</Invite>
        </TextContainer>
      </Container>
    </>
  );
}
