import React from "react";
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
  ImageWrapper,
  Icon
} from "../styled-components/PhotoStoryStyled";

export default function Stories(props) {
  return (
    <>
      <Container>
        <div className="ImgWrapper">
          <img src={props.images[3].path} alt={props.images[3].alt} />
        </div>

        <TextContainer>
          <Title>{props.images[3].title}</Title>
          <Text>{props.images[3].text}</Text>
          <ImageWrapper>
            <Invite>{props.images[3].invite}</Invite>
            <Icon src={props.images[3].icon} />
          </ImageWrapper>
        </TextContainer>
      </Container>
    </>
  );
}
