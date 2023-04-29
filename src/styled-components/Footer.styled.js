import styled from "styled-components";
import { LogoTitle } from "./Header.styled";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
    width: 100%;
    padding: 56px 0px;
    margin: auto;
    background-color: #000000;

    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
        padding: 64px 5.07%;
    }
`

export const LogoTitle2 = styled(LogoTitle)``


export const BlockDiv = styled.div`
    display: block;
    margin: auto;
    width: 169px;

    @media(min-width: 768px) {
        margin: 0px;
    }
`

export const IconsDiv = styled.div`
    width: 155px;
    display: flex;
    gap: 13.33px;
    margin: 32px auto 0px;
    padding-bottom: 31.97px;

    @media(min-width: 768px) {
        margin: 120px 0px 0px 0px;
    }
`

export const IconArrow = styled.img`
    filter: invert(91%) sepia(97%) saturate(0%) hue-rotate(54deg) brightness(300%) contrast(150%);
`
export const LinkTitleFooter = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 15.62px;
    letter-spacing: 2px;
    text-align: center;
    color: white;
    margin-top: 19px;
`

export const InviteDiv = styled.div`
    margin: 119px auto 0px;
    width: 175px;
    display: flex;
    gap: 22px;
    justify-content: space-between;

    @media(min-width: 768px) {
        margin: 0px 0px 0px auto;
    }


`

export const InviteText = styled(LinkTitleFooter)`
    text-align: start;
    margin-top: 3px;
`

export const FooterText = styled.p`
    margin-top: 34px;
    text-align: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 19.53px;
    color: white;
    opacity: 0.5;

    @media(min-width: 768px) {
        margin-top: 120px;
    }
`

export const LinksDiv = styled.div`

    @media(min-width: 768px) {
        display: flex;
        gap: 26px;
        margin-top: -160px;
    }
`