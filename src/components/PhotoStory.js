import React from "react";
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
  Icon,
  IconWrapper,
  ImgWrapper,Image
} from "../styled-components/PhotoStoryStyled";
// import styled from 'styled-components';

export default function PhotoStory(props) {
  return (
    <>
      <Container>
        <ImgWrapper>
          <img src={props.images[1].path} alt={props.images[1].alt} />
        </ImgWrapper>

        <TextContainer>
          <Title>{props.images[1].title}</Title>
          <Text>{props.images[1].text}</Text>
          <IconWrapper>
          <Invite>{props.images[1].invite}</Invite>
          <Icon src={props.images[1].icon} color="#ffffff"/>
          </IconWrapper>
        </TextContainer>
      </Container>

      <Container>
        <ImgWrapper>
          <img src={props.images[0].path} alt={props.images[0].alt} />
        </ImgWrapper>

        <TextContainer >
          <Title>{props.images[0].title}</Title>
          <Text>{props.images[0].text}</Text>
          <Invite>{props.images[0].invite}</Invite>
        </TextContainer>
      </Container>

      <Container>
        <ImgWrapper>
          <Image src={props.images[2].path} alt={props.images[2].alt} />
        </ImgWrapper>

        <TextContainer>
          <Title>{props.images[2].title}</Title>
          <Text>{props.images[2].text}</Text>
          <Invite>{props.images[2].invite}</Invite>
        </TextContainer>
      </Container>
    </>
  );
}
