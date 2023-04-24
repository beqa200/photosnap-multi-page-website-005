import React from "react";
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
  IconWrapper,
  Icon,
  ImgWrapper,
  Image
} from "../styled-components/PhotoStoryStyled";

export default function Stories(props) {
  return (
    <>
      <Container style={{ backgroundColor: '#000000' }}>
        <ImgWrapper>
          <Image src={props.images[3].path} alt={props.images[3].alt} />
        </ImgWrapper>

        <TextContainer>
          <Title>{props.images[3].title}</Title>
          <Text>{props.images[3].text}</Text>
          <IconWrapper>
            <Invite>{props.images[3].invite}</Invite>
            <Icon src={props.images[3].icon} />
          </IconWrapper>
        </TextContainer>
      </Container>
    </>
  );
}
