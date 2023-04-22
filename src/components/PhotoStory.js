import React from "react";
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
  Icon,
  ImageWrapper
} from "../styled-components/PhotoStoryStyled";
// import styled from 'styled-components';

export default function PhotoStory(props) {
  return (
    <>
      <Container>
        <div className="ImgWrapper">
          <img src={props.images[1].path} alt={props.images[1].alt} />
        </div>

        <TextContainer>
          <Title>{props.images[1].title}</Title>
          <Text>{props.images[1].text}</Text>
          <ImageWrapper>
          <Invite>{props.images[1].invite}</Invite>
          <Icon src={props.images[1].icon}/>
          </ImageWrapper>
        </TextContainer>
      </Container>

      <Container>
        <div className="ImgWrapper">
          <img src={props.images[0].path} alt={props.images[0].alt} />
        </div>

        <TextContainer >
          <Title>{props.images[0].title}</Title>
          <Text>{props.images[0].text}</Text>
          <Invite>{props.images[0].invite}</Invite>
        </TextContainer>
      </Container>

      <Container>
        <div className="ImgWrapper">
          <img src={props.images[2].path} alt={props.images[2].alt} />
        </div>

        <TextContainer>
          <Title>{props.images[2].title}</Title>
          <Text>{props.images[2].text}</Text>
          <Invite>{props.images[2].invite}</Invite>
        </TextContainer>
      </Container>
    </>
  );
}
