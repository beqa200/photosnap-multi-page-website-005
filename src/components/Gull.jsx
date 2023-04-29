import React from "react";
import{GullMainContainer,GullContainer,CheckWrapper, CheckSign,MenuWrapper,Menu,TitleWrapper,GullTitle,Line,GullMainTitle} from '../styled-components/GullStyled'

export default function Gull(props) {
  const gullBox = [
    {
      title: "UNLIMITED STORY POSTING",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
    },

    {
      title: "UNLIMITED PHOTO UPLOAD",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
    },

    {
      title: "EMBEDDING CUSTOM CONTENT",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
    },

    {
      title: "CUSTOMIZE METADATA",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
    },

    {
      title: "ADVANCED METRICS",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
    },

    {
      title: "PHOTO DOWNLOADS",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
    },
    {
      title: "SEARCH ENGINE INDEXING",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
    },
    {
      title: "CUSTOM ANALYTICS",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
    },
  ];
  return(
    <div>
      <GullMainContainer>
        {gullBox.map((item) => {
          return (
            <gullContainer>
              <GullMainTitle>THE FEATURES</GullMainTitle>
              <Line></Line>
              <TitleWrapper>
              <GullTitle>{item.title}</GullTitle>
              </TitleWrapper>
              <MenuWrapper>
                <Menu>{item.menu.first}</Menu>
                <Menu>{item.menu.second}</Menu>
                <Menu>{item.menu.third}</Menu>
              </MenuWrapper>
              <CheckWrapper>
                <CheckSign>
                  <img src={item.gullIcon}/>
                </CheckSign>
                <CheckSign>
                  <img src={item.gullIcon}/>
                </CheckSign>
                <CheckSign>
                  <img src={item.gullIcon}/>
                </CheckSign>
                
              </CheckWrapper>
            </gullContainer>
          );
        })}
      </GullMainContainer> 
    </div>
  )

}

