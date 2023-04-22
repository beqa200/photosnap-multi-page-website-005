import React from 'react';
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
} from "../styled-components/PhotoStoryStyled";

export default function Pricing(props) {
  return (
    <>
     <Container style={{ backgroundColor: '#000000' }}>
        <div>
          <img src={props.images[5].path} alt={props.images[5].alt} />
        </div>

        <TextContainer>
          <Title>{props.images[5].title}</Title>
          <Text>{props.images[5].text}</Text>
        </TextContainer>
      </Container>
    </>
  )
}
