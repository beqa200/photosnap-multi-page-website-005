import {
  StyledFooter,
  LogoTitle2,
  BlockDiv,
  IconsDiv,
  IconArrow,
  LinkTitleFooter,
  InviteDiv,
  InviteText,
  FooterText,
  LinksDiv,
} from "../styled-components/Footer.styled";
import { links } from "./Header";
import { StyledLink } from "../styled-components/Header.styled";

const footerLinks = [
  {
    name: "HOME",
    link: "/",
  },
  ...links,
];

const iconsArr = [
  "./assets/shared/desktop/facebook.svg",
  "./assets/shared/desktop/youtube.svg",
  "./assets/shared/desktop/twitter.svg",
  "./assets/shared/desktop/pinterest.svg",
  "./assets/shared/desktop/instagram.svg",
];

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <BlockDiv>
          <LogoTitle2>
            <img src="./assets/logo.png" alt="logo" />
            <img src="./assets/photosnap2.png" alt="title" />
          </LogoTitle2>
        </BlockDiv>
        <IconsDiv>
          {iconsArr.map((icon) => (
            <IconArrow src={icon} key={Math.random()} />
          ))}
        </IconsDiv>
        <LinksDiv>
          {footerLinks.map((item) => (
            <StyledLink to={item.link} key={Math.random()}>
              <LinkTitleFooter>{item.name}</LinkTitleFooter>
            </StyledLink>
          ))}
        </LinksDiv>
      </div>
      <div>
        <InviteDiv>
          <InviteText>GET AN INVITE</InviteText>
          <IconArrow src="./assets/shared/desktop/arrow.svg" alt="arrow" />
        </InviteDiv>
        <FooterText>Copyright 2019. All Rights Reserved</FooterText>
      </div>
    </StyledFooter>
  );
}
