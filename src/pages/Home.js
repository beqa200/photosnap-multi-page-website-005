
import React from "react";
import {
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
  ImgWrapper
} from "../styled-components/PhotoStoryStyled";
// import styled from 'styled-components';

export default function Home(props) {
  return (
    <>
      <Container style={{ backgroundColor: 'black' }}>
        <ImgWrapper>
          <img src={props.images[1].path} alt={props.images[1].alt} />
        </ImgWrapper>

        <TextContainer>
          <Stick></Stick>
          <Title>{props.images[1].title}</Title>
          <Text>{props.images[1].text}</Text>
          <IconWrapper>
          <Invite>{props.images[1].invite}</Invite>
          <Icon src={props.images[1].icon}/>
          </IconWrapper>
        </TextContainer>
      </Container>

      <Container style={{ backgroundColor: '#ffffff' }} >
        <ImgWrapper >
          <img src={props.images[0].path} alt={props.images[0].alt} />
        </ImgWrapper>

        <TextContainer>
          <BlackTitle>{props.images[0].title}</BlackTitle>
          <BlackText>{props.images[0].text}</BlackText>
          <IconWrapper>
          <BlackInvite>{props.images[1].invite}</BlackInvite>
          <Icon src={props.images[1].icon}/>
          </IconWrapper>
        </TextContainer>
      </Container>

      <Container style={{ backgroundColor: '#ffffff' }}>
        <ImgWrapper>
          <img src={props.images[2].path} alt={props.images[2].alt} />
        </ImgWrapper>

        <TextContainer>
          <BlackTitle>{props.images[2].title}</BlackTitle>
          <BlackText>{props.images[2].text}</BlackText>
          <IconWrapper>
          <BlackInvite>{props.images[1].invite}</BlackInvite>
          <Icon src={props.images[1].icon}/>
          </IconWrapper>
        </TextContainer>
      </Container>
    </>
  );
}