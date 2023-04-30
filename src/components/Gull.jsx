import React from "react";
import {
  GullMainContainer,
  GullContainer,
  CheckWrapper,
  CheckSign,
  MenuWrapper,
  Menu,
  TitleWrapper,
  GullTitle,
  Line,
  BlackLine,
  GullMainTitle,
  TabletContainer,
  TabletMenuWrapper,
  TabletMenuContainer,CompareTitle
} from "../styled-components/GullStyled";

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
  return (
    <div>
      <GullMainContainer>
        <CompareTitle>COMPARE</CompareTitle>
       <TabletMenuContainer>
       <GullMainTitle>THE FEATURES</GullMainTitle>
       <BlackLine></BlackLine>
        <TabletMenuWrapper>
          <Menu>BASIC</Menu>
          <Menu>PRO</Menu>
          <Menu>BUSINESS</Menu>
        </TabletMenuWrapper>
       </TabletMenuContainer>

        {gullBox.map((item) => {
          return (
            <gullContainer>
              {/* <BlackLine></BlackLine> */}
              <TabletContainer>
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
                    <img src={item.gullIcon} />
                  </CheckSign>
                  <CheckSign>
                    <img src={item.gullIcon} />
                  </CheckSign>
                  <CheckSign>
                    <img src={item.gullIcon} />
                  </CheckSign>
                </CheckWrapper>
                
              </TabletContainer>
              <Line></Line>
            </gullContainer>
          );
        })}
      </GullMainContainer>
    </div>
  );
}
