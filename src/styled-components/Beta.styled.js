import styled from "styled-components";


export const StyledBeta = styled.div`
    background-image: url("./assets/Bitmap.jpg");
    background-repeat: no-repeat;
    position: relative;
    margin: auto; //es da 
    max-width: 375px; //es ar momwons
    height: 288px;
`
export const ColorDiv = styled.div`
    position: absolute;
    top: 0px;
    left: 33px;
    width: 128px;
    height: 6px;
    background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
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
`

export const InviteBeta = styled.div`
    position: absolute;
    top: 208px;
    left: 35px;
    gap: 16px;
    display: flex;
    gap: 16px;
`