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
  ImgWrapper,
  ImageDiv
} from "../styled-components/PhotoStoryStyled";
import styled from 'styled-components';
import Image from '../components/Image';



export default function Home(props) {
const minContent = [
  {
    bg: "./assets/stories/mobile/mountains.jpg",
    date: "April 16th 2020",
    title: "The Mountains",
    creator: "by John Appleseed"
  },
  {
    bg: "./assets/stories/mobile/cityscapes.jpg",
    date: "April 14th 2020",
    title: "Sunset Cityscapes",
    creator: "by Benjamin Cruz"
  },
  {
    bg: "./assets/stories/mobile/18-days-voyage.jpg",
    date: "April 11th 2020",
    title: "18 Days Voyage",
    creator: "by Alexei Borodin"
  },
  {
    bg: "./assets/stories/mobile/architecturals.jpg",
    date: "April 9th 2020",
    title: "Architecturals",
    creator: "by Samantha Brooke"
  },
]

  return (
    <>
      <Container style={{ backgroundColor: 'black' }} ordering='row-reverse'>
        <ImgWrapper>
          <ImageDiv src={props.images[1].path} alt={props.images[1].alt} />
        </ImgWrapper>

        <TextContainer>
          <Stick></Stick>
          <Title>{props.images[1].title}</Title>
          <Text>{props.images[1].text}</Text>
          <IconWrapper>
          <Invite>{props.images[1].invite}</Invite>
          <Icon src={props.images[1].icon} style={{filter: 'invert(98%)brightness(118%) contrast(100%)'}}/>
          </IconWrapper>
        </TextContainer>
      </Container>

      <Container style={{ backgroundColor: '#ffffff' }} >
        <ImgWrapper>
          <ImageDiv src={props.images[0].path} alt={props.images[0].alt }  />
        </ImgWrapper>

        <TextContainer style={{}}>
          <BlackTitle>{props.images[0].title}</BlackTitle>
          <BlackText>{props.images[0].text}</BlackText>
          <IconWrapper>
          <BlackInvite>{props.images[1].invite}</BlackInvite>
          <Icon src={props.images[1].icon}/>
          </IconWrapper>
        </TextContainer>
      </Container>

      <Container style={{ backgroundColor: '#ffffff' }} ordering='row-reverse'>
        <ImgWrapper>
          <ImageDiv src={props.images[2].path} alt={props.images[2].alt} />
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
          <div>
      {minContent.map((item) => (
        <Image bg={item.bg} dateTxt={item.date} title={item.title} creator={item.creator} key={Math.random()}/>
      ))}
    </div>
    </>
  );
}