import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 24px;
`

export const LogoTitle = styled.div`
    display: flex;
    gap: 8px;
`

export const MenuIcon = styled.img`
    height: ${({height}) => height};
`

export const Menu = styled.nav`
    position: absolute;
    width: 100%;
    top: 72px;
    left: 0px;
    padding: 12px 32px 32px;
    z-index: 99;
`

export const LinkTitle = styled.h1`
    font-weight: 700;
    font-size: 15px;
    line-height: 19.53px;
    letter-spacing: 2.5px;
    text-align: center;
    color: #000000;
    margin-top: 20px;
`

export const Hr = styled.hr`
    width: 100%;
    height: 1px;
    border: none;
    background-color: #000000;
    margin-top: 20px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const StyledButton = styled.button`
    width: 310px;
    height: 48px;
    border: none;
    background-color: #000000;
    color: white;
    font-weight: 700;
    font-size: 15px;
    line-height: 19.53px;
    letter-spacing: 2.5px;
    display: block;
    margin: 20px auto 0px;
`
