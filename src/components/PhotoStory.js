import React from "react";
import { Container,Title,TextContainer,Text,Invite } from "../styled-components/PhotoStoryStyled";
// import styled from 'styled-components';

export default function PhotoStory(props) {
  return (
    <Container>
      <div className="ImgWrapper">
        <img src={props.images[1].path} alt={props.images[1].alt} />
      </div>

      <TextContainer>
      <Title>{props.images[1].title}</Title>
      <Text>{props.images[1].text}</Text>
      <Invite>{props.images[1].invite}</Invite>
      </TextContainer>
    </Container>
  );
}
