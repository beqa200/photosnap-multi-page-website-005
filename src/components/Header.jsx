import { useState } from "react";
import {
  StyledHeader,
  LogoTitle,
  MenuIcon,
  Menu,
  LinkTitle,
  Hr,
  StyledLink,
  StyledButton,
  DarkDiv,
} from "../styled-components/Header.styled";
import { Link } from "react-router-dom";

export const links = [
  {
    name: "STORIES",
    link: "/stories",
  },
  {
    name: "FEATURES",
    link: "/features",
  },
  {
    name: "PRICING",
    link: "/pricing",
  },
];

export default function Header({ isMenuVisible, setIsMenuVisible }) {
  return (
    <StyledHeader>
      <LogoTitle>
        <img src="./assets/logo.png" />
        <img src="./assets/PHOTOSNAP.png" />
      </LogoTitle>
      <MenuIcon
        src={isMenuVisible ? "./assets/xIcon.png" : "./assets/menuIcon.jpg"}
        height={isMenuVisible ? "14.85px" : "6px"}
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      />
      {isMenuVisible ? (
        <>
          <Menu>
            {links.map((item) => (
              <StyledLink
                to={item.link}
                key={Math.random()}
                onClick={() => setIsMenuVisible(!isMenuVisible)}
              >
                <LinkTitle>{item.name}</LinkTitle>
              </StyledLink>
            ))}
            <Hr />
            <StyledButton>GET AN INVITE</StyledButton>
          </Menu>
          <DarkDiv />
        </>
      ) : null}
    </StyledHeader>
  );
}
