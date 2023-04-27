import { useState } from "react";
import {
  PriceMain,
  Period,
  Month,
  Year,
  Switch,
  Circle,
} from "../styled-components/Price.styled";

export default function Price() {
  const [isChecked, setIsChecked] = useState(false);

  const change = () => {
    setIsChecked(!isChecked);
  };

  return (
    <PriceMain>
      <Period>
        <Month>Monthly</Month>
        <Switch onClick={change} bg={isChecked ? "#000000" : "#DFDFDF"}>
          <Circle
            bgC={isChecked ? "#DFDFDF" : "#000000"}
            mLeft={isChecked ? "32px" : null}
          />
        </Switch>
        <Year>Yearly</Year>
      </Period>
    </PriceMain>
  );
}
