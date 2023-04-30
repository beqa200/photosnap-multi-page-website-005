import styled from "styled-components";


export const StyledBeta = styled.div`
    background-image: url("./assets/Bitmap.jpg");
    background-repeat: no-repeat;
    position: relative;
    margin: auto; //es da 
    max-width: 375px; //es ar momwons
    height: 288px;

    @media(min-width: 768px) {
        max-width: 768px;
        height: 280px;
        background-image: url("./assets/shared/tablet/bg-beta.jpg");
    }

    @media(min-width: 1440px) {
        max-width: 1440px;
        background-image: url("./assets/shared/desktop/bg-beta.jpg");
    }
`
export const ColorDiv = styled.div`
    position: absolute;
    top: 0px;
    left: 33px;
    width: 128px;
    height: 6px;
    background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);

    @media(min-width: 768px) {
        width: 6px;
        height: 280px;
        left: 0px;
    }
`

export const TextBeta = styled.h1`
    position: absolute;
    top: 64px;
    left: 33px;
    right: 29px;
    width: 313px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 3.33px;
    color: white;
    text-transform: uppercase;

    @media(min-width: 768px) {
        font-size: 40px;
        line-height: 48px;
        letter-spacing: 4.17px;
        width: 400px;
        top: 68px;
        left: 39px;
    }

    @media(min-width: 1440px) {
        top: 68px;
        left: 165px;
    }
`

export const InviteBeta = styled.div`
    position: absolute;
    top: 208px;
    left: 35px;
    gap: 16px;
    display: flex;
    gap: 16px;

    @media(min-width: 768px) {
        top: 132px;
        left: 562px;
    }

    @media(min-width: 1440px) {
        top: 132px;
        left: 1109px;
    }
`