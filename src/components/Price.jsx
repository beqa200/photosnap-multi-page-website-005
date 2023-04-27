import { useState } from "react";
import {
  PriceMain,
  Period,
  Month,
  Year,
  Switch,
  Circle,
  OfferDiv,
  Offertitle,
  OfferCond,
  OfferPrice,
  OfferDur,
  ColorDiv,
  Butt,
} from "../styled-components/Price.styled";

const offer = [
  {
    title: "Basic",
    off: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    butTxt: "PICK PLAN",
  },
  {
    title: "Pro",
    off: "More advanced features available. Recommended for photography veterans and professionals.",
    butTxt: "PICK PLAN",
  },
  {
    title: "Business",
    off: "Additional features available such as more detailed metrics. Recommended for business owners.",
    butTxt: "PICK PLAN",
  },
];

export default function Price() {
  const [isChecked, setIsChecked] = useState(false);

  const change = () => {
    setIsChecked(!isChecked);
  };

  return (
    <PriceMain>
      <Period>
        <Month op={isChecked ? ".5" : "1"}>Monthly</Month>
        <Switch onClick={change} bg={isChecked ? "#000000" : "#DFDFDF"}>
          <Circle
            bgC={isChecked ? "#DFDFDF" : "#000000"}
            mLeft={isChecked ? "32px" : null}
          />
        </Switch>
        <Year op={isChecked ? "1" : ".5"}>Yearly</Year>
      </Period>
      {offer.map((item, index) => {
        return (
          <OfferDiv
            key={Math.random()}
            bgColor={index === 1 ? "#000000" : "#F5F5F5"}
            pt={index === 1 ? "48px" : "56px"}
            pb={index === 1 ? "48px" : "40px"}
          >
            {index === 1 ? <ColorDiv /> : null}
            <Offertitle cl={index === 1 ? "#FFFFFF" : "#000000"}>
              {item.title}
            </Offertitle>
            <OfferCond cltxt={index === 1 ? "#FFFFFF" : "#000000"}>
              {item.off}
            </OfferCond>
            <OfferPrice clpr={index === 1 ? "#FFFFFF" : "#000000"}>
              {index === 0 ? (isChecked ? "$190.00" : "$19.00") : null}
              {index === 1 ? (isChecked ? "$390.00" : "$39.00") : null}
              {index === 2 ? (isChecked ? "$990.00" : "$99.00") : null}
            </OfferPrice>
            <OfferDur clDur={index === 1 ? "#FFFFFF" : "#000000"}>
              {isChecked ? "per year" : "per month"}
            </OfferDur>
            <Butt
              bgButt={index === 1 ? "#FFFFFF" : "#000000"}
              clButt={index === 1 ? "#000000" : "#FFFFFF"}
            >
              {item.butTxt}
            </Butt>
          </OfferDiv>
        );
      })}
    </PriceMain>
  );
}
