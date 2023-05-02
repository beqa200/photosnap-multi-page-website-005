import React from "react";
import {
  GullMainContainer,
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
  TabletMenuContainer,
  CompareTitle,
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
      checks: 3,
    },

    {
      title: "UNLIMITED PHOTO UPLOAD",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
      checks: 3,
    },

    {
      title: "EMBEDDING CUSTOM CONTENT",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
      checks: 2,
    },

    {
      title: "CUSTOMIZE METADATA",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
      checks: 2,
    },

    {
      title: "ADVANCED METRICS",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
      checks: 1,
    },

    {
      title: "PHOTO DOWNLOADS",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
      checks: 1,
    },
    {
      title: "SEARCH ENGINE INDEXING",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
      checks: 1,
    },
    {
      title: "CUSTOM ANALYTICS",
      menu: {
        first: "BASIC",
        second: "PRO",
        third: "BUSINESS",
      },
      gullIcon: "./assets/pricing/desktop/check.svg",
      checks: 1,
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
            <>
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
                  {item.checks >= 1 && (
                    <CheckSign>
                      <img src={item.gullIcon} />
                    </CheckSign>
                  )}
                  {item.checks >= 2 && (
                    <CheckSign>
                      <img src={item.gullIcon} />
                    </CheckSign>
                  )}
                  {item.checks >= 3 && (
                    <CheckSign>
                      <img src={item.gullIcon} />
                    </CheckSign>
                  )}
                </CheckWrapper>
              </TabletContainer>
              <Line></Line>
            </>
          );
        })}
      </GullMainContainer>
    </div>
  );
}
