import {
  StyledBeta,
  ColorDiv,
  TextBeta,
  InviteBeta,
} from "../styled-components/Beta.styled";
import { InviteText, Icon } from "../styled-components/Footer.styled";

export default function Beta() {
  return (
    <StyledBeta>
      <ColorDiv />
      <TextBeta>We’re in beta. Get your invite today!</TextBeta>
      <InviteBeta>
        <InviteText>GET AN INVITE</InviteText>
        <Icon src="./assets/shared/desktop/arrow.svg" alt="arrow" />
      </InviteBeta>
    </StyledBeta>
  );
}
