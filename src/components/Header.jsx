import { useState } from "react";
import {
  StyledHeader,
  LogoTitle,
  Logo,
  Title,
  MenuIcon,
} from "../styled-components/Header.styled";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <StyledHeader>
      <LogoTitle>
        <Logo src="./assets/logo.png" />
        <Title src="./assets/PHOTOSNAP.png" />
      </LogoTitle>
      <MenuIcon
        src={isMenuVisible ? "./assets/xIcon.png" : "./assets/menuIcon.jpg"}
        height={isMenuVisible ? "14.85px" : "6px"}
        onClick={() => {
          setIsMenuVisible(!isMenuVisible);
        }}
      />
    </StyledHeader>
  );
}
