import styled from "styled-components";

export const PriceMain = styled.div`
    width: 375px;
    margin: auto;
    padding: 64px 28px;
`

export const Period = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 32px 16px;
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
`

export const Offertitle = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    text-align: center;
    color: ${({cl}) => cl};
    margin-top: ${({marTop}) => marTop};
`

export const OfferCond = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    opacity: 0.6;
    color: ${({cltxt}) => cltxt};
    margin-top: 18px;

`

export const OfferPrice = styled.p`
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4.17px;
    text-align: center;
    color: ${({clpr}) => clpr};
    margin-top: 40px;
`

export const OfferDur = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    opacity: 0.6;
    color: ${({clDur}) => clDur};
    margin-top: 0px;
`

export const ColorDiv = styled.div`
    width: 100%;
    height: 6px;
    background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
    left: 0px;
    position: absolute;
    top: 0px;
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
`