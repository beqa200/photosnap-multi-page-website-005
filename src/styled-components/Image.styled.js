import styled from "styled-components";

export const ImageBot = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 6px;
    background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
    z-index: 4;
    display: none;
`

export const StyledDiv = styled.div`
    background-image: url(${({bg}) => bg});
    background-repeat: no-repeat;
    height: 375px;
    position: relative;

    &::before {
        content: "";
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%);
        position: absolute;
        top: 0;
        left: 0;
        width: 375px;
        height: 100%;
        z-index: 1;
        filter: brightness(50%);
    }

    @media(min-width: 768px) {
        background-image: url(${({bgTablet}) => bgTablet});
        background-size: 384px 500px;
        height: 500px;

        &::before {
        width: 384px;
        height: 100%;
        z-index: 1;
        filter: brightness(50%);
    }
    }

    @media(min-width: 1440px) {
        background-image: url(${({bgTablet}) => bgTablet});
        background-size: 360px 500px;
        height: 500px;
        cursor: pointer;
        transition: transform 0.3s ease;
        

        &:hover {
            transform: translateY(-24px);
            z-index: 3;
        }


        &:hover ${ImageBot} {
            display: block;
        }

        &::before {
        width: 360px;
        height: 100%;
        z-index: 1;
        filter: brightness(50%);
    }



    }
`

export const DateP = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 16.93px;
    color: #FFFFFF;
    margin-top: 4px;
`

export const ImageTitle = styled(DateP)`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
`

export const Creator = styled(DateP)`
`

export const Hr = styled.hr`
    width: 291.67px;
    height: 1px;
    border: none;
    background-color: white;
    margin-top: 16px;
    opacity: 0.25;

    @media(min-width: 1440px) {
        width: 280px;
    }
`

export const ReadDiv = styled.div`
    display: flex;
    gap: 152.78px;
    margin-top: 20px;

    @media(min-width: 1440px) {
        gap: 141px;
    }
`

export const Read = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 15.62px;
    letter-spacing: 2px;
    color: #FFFFFF;
`

export const Arrow = styled.img`
    filter: invert(91%) sepia(97%) saturate(0%) hue-rotate(54deg) brightness(104%) contrast(106%);
`

export const ContentDiv = styled.div`
    top: 211px;
    right: 41.67px;
    left: 41.67px;
    position: absolute;
    z-index: 2;


    @media(min-width: 768px) {
        top: 340px;
    }

`

export const WrapDiv = styled.div`
    @media(min-width: 768px) {
        width: 384px;
    }

    @media(min-width: 1440px) {
        width: 360px;
    }
    
`


