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
    padding: 0px 32px;
`

export const Month = styled.h1`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
`

export const Year = styled.h1`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    opacity: .5;
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

