import React from 'react';
import{IconDiv,IconTitle,IconP,IconContainer,IconMainContainer} from '../styled-components/IconBoxStyled';

export default function IconBox(props) {
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
    }
   
  ];

  return (
    <IconMainContainer>
   {icons.map((item) =>{
    return (
      <IconContainer>
    <IconDiv>
        <img src={item.icon} alt ={item.alt}/>
    </IconDiv>
    <IconTitle>{item.title}</IconTitle>
    <IconP>{item.text}</IconP>
</IconContainer>
    )
   })}
    </IconMainContainer>
  )
}
