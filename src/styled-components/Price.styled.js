import styled from "styled-components";

export const PriceMain = styled.div`
    width: 375px;
    margin: auto;
    padding: 64px 28px;

    @media(min-width: 768px) {
        width: 689px;
        padding: 112px 0px;
    }

    @media(min-width: 1440px) {
        width: 1110px;
        padding: 120px 0px;
    }
`

export const Period = styled.div`
    display: flex;
    gap: 32px;
    align-items: center;
    padding: 0px 32px 16px;

    @media(min-width: 768px) {
        margin: auto 186px;
    }

    @media(min-width: 1440px) {
        margin: auto 387px;
        padding: 0px 32px 24px;
    }
`

export const Month = styled.h1`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    opacity: ${({op}) => op};
`

export const Year = styled.h1`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    opacity: ${({op}) => op};
`

export const Switch = styled.div`
    width: 64px;
    height: 32px;
    border-radius: 16px;
    background-color: ${({bg}) => bg};
    padding: 4px;
    display: flex;

    @media(min-width: 1440px) {
        cursor: pointer;
    }

`

export const Circle = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color:  ${({bgC}) => bgC};
    margin-left: ${({mLeft}) => mLeft};
    transition: .2s;
`

export const OfferDiv = styled.div`
    width: 100%;
    padding: ${({pt}) => pt} 21.5px ${({pb}) => pb};
    background-color: ${({bgColor}) => bgColor};
    margin-top: 24px;
    position: relative;

    @media(min-width: 768px) {
        width: 689px;
        display: flex;
        gap: 100px;
        padding: 40px;
    }

    @media(min-width: 1440px) {
        width: 350px;
        display: block;
        padding: ${({ptDesk}) => ptDesk} 21.5px ${({pbDesk}) => pbDesk};
    }
`

export const Offertitle = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    text-align: center;
    color: ${({cl}) => cl};
    margin-top: ${({marTop}) => marTop};

    @media(min-width: 768px) {
        text-align: start;
    }

    @media(min-width: 1440px) {
        text-align: center;
    }
`

export const OfferCond = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    opacity: 0.6;
    color: ${({cltxt}) => cltxt};
    margin-top: 18px;

    @media(min-width: 768px) {
        text-align: start;
    }

    @media(min-width: 1440px) {
        text-align: center;
    }

`

export const OfferPrice = styled.p`
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4.17px;
    text-align: center;
    color: ${({clpr}) => clpr};
    margin-top: 40px;

    @media(min-width: 768px) {
        margin: 0px 8px 0px 0px;
    }

    @media(min-width: 1440px) {
        margin: 40px 0px 0px;
    }
`

export const OfferDur = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    opacity: 0.6;
    color: ${({clDur}) => clDur};
    margin-top: 0px;

    @media(min-width: 768px) {
        text-align: right;
        margin-right: 16px;
    }

    @media(min-width: 1440px) {
        text-align: center;
        margin: 0px;
    }
`

export const ColorDiv = styled.div`
    width: 100%;
    height: 6px;
    background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
    left: 0px;
    position: absolute;
    top: 0px;

    @media(min-width: 768px) {
        width: 6px;
        height: 100%;
    }

    @media(min-width: 1440px) {
        width: 100%;
        height: 6px;
    }
`

export const Butt = styled.button`
    width: 245px;
    height: 40px;
    background-color: ${({bgButt}) => bgButt};
    font-weight: 700;
    font-size: 12px;
    line-height: 15.62px;
    letter-spacing: 2px;
    color: ${({clButt}) => clButt};
    margin: 40px auto 0px;
    border: none;
    display: block;

    @media(min-width: 768px) {
        display: none;
    }

    @media(min-width: 1440px) {
        display: block;
        cursor: pointer;

        &:hover {
            background-color: #DFDFDF;
            color: black;
        }
    }
`

export const ButtTablet = styled(Butt)`
    display: none;

    @media(min-width: 768px) {
        width: 270px;
        display: block;
        margin: 32px 0px 0px;
    }

    @media(min-width: 1440px) {
        display: none;
    }
`

export const Flexing = styled.div`

    @media(min-width: 1440px) {
        display: flex;
        align-items: center;
        gap: 30px;
    }
`