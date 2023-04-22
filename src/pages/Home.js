
import React from "react";
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
  Icon,
  ImageWrapper,
  BlackTitle,
  BlackText,
  BlackInvite
} from "../styled-components/PhotoStoryStyled";
// import styled from 'styled-components';

export default function Home(props) {
  return (
    <>
      <Container style={{ backgroundColor: 'black' }}>
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

      <Container style={{ backgroundColor: '#ffffff' }} >
        <div >
          <img src={props.images[0].path} alt={props.images[0].alt} />
        </div>

        <TextContainer>
          <BlackTitle>{props.images[0].title}</BlackTitle>
          <BlackText>{props.images[0].text}</BlackText>
          <ImageWrapper>
          <BlackInvite>{props.images[1].invite}</BlackInvite>
          <Icon src={props.images[1].icon}/>
          </ImageWrapper>
        </TextContainer>
      </Container>

      <Container style={{ backgroundColor: '#ffffff' }}>
        <div className="ImgWrapper">
          <img src={props.images[2].path} alt={props.images[2].alt} />
        </div>

        <TextContainer>
          <BlackTitle>{props.images[2].title}</BlackTitle>
          <BlackText>{props.images[2].text}</BlackText>
          <ImageWrapper>
          <BlackInvite>{props.images[1].invite}</BlackInvite>
          <Icon src={props.images[1].icon}/>
          </ImageWrapper>
        </TextContainer>
      </Container>
    </>
  );
}