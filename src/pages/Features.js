import React from "react";
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
  ImgWrapper,
  ImageDiv,
  Stick
} from "../styled-components/PhotoStoryStyled";
import{IconDiv , IconTitle,IconP,IconContainer,IconsMainContainer} from '../styled-components/IconBoxStyled';

import Beta from "../components/Beta";


export default function Features(props) {
  const icons = [
    {
      icon: "./assets/features/desktop/responsive.svg",
      title: "100% Responsive",
      text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      icon: "./assets/features/desktop/no-limit.svg",
      title: "No Photo Upload Limit",
      text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      icon: "./assets/features/desktop/embed.svg",
      title: "Available to Embed",
      text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    },
    {
      icon: "./assets/features/desktop/custom-domain.svg",
      title: "Custom Domain",
      text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    },
    {
      icon: "./assets/features/desktop/boost-exposure.svg",
      title: "Boost Your Exposure",
      text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    },
    {
      icon: "./assets/features/desktop/drag-drop.svg",
      title: "Drag & Drop Image",
      text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    },
  ];

  return (
    <>
      <Container style={{ backgroundColor: "#000000" }} ordering='row-reverse'>
        <ImgWrapper>
          <ImageDiv src={props.images[4].pathD} alt={props.images[4].alt} />
        </ImgWrapper>

        <TextContainer ptop="72px" pbot="72px">
          <Stick />
          <Title>{props.images[4].title}</Title>
          <Text>{props.images[4].text}</Text>
        </TextContainer>
      </Container>
      <IconsMainContainer>
        {icons.map((item) => {
          return (
            <IconContainer flex ='1 1 339px' width='450px'>
              <IconDiv>
                <img src={item.icon} alt={item.alt} />
              </IconDiv>
              <IconTitle>{item.title}</IconTitle>
              <IconP>{item.text}</IconP>
            </IconContainer>
          );
        })}
      </IconsMainContainer>
      <Beta />
    </>
  );
}
