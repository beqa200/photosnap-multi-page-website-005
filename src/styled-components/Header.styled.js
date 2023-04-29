import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 24px;

    @media(min-width: 768px){
        padding: 16px 39.5px;
    }
`

export const LogoTitle = styled.div`
    display: flex;
    gap: 8px;
`

export const MenuIcon = styled.img`
    height: ${({height}) => height};

    @media(min-width: 768px){
        display: none;
    }
`

export const Menu = styled.nav`
    position: absolute;
    width: 100%;
    top: 72px;
    left: 0px;
    padding: 12px 32px 32px;
    z-index: 99;
    background-color: white;

    @media(min-width: 768px){
        display: none;
    }
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
    opacity: 0.25;
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

export const DarkDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 72px;
    left: 0px;
    z-index: 98;
    background-color: black;
    opacity: .5;

    @media(min-width: 768px){
        display: none;
    }
`

export const MenuInHeader = styled.div`
    @media(min-width: 768px) {
        display: flex;
        gap: 37px;
    }
    
`
export const HeaderLink = styled.p`
    display: none;

    @media(min-width: 768px) {
        display: block;
        font-weight: 700;
        font-size: 12px;
        line-height: 15.62px;
        letter-spacing: 2px;
        color: #000000;
    }
    
`

export const StyledButtHeader = styled(StyledButton)`
    display: none;

    @media(min-width: 768px) {
        display: block;
        width: 158px;
        height: 40px;
        border: none;
        background-color: #000000;
        color: white;
        font-weight: 700;
        font-size: 12px;
        line-height: 15.62px;
        letter-spacing: 2px;
        margin: 0px 0px 0px 12px;
    }
`