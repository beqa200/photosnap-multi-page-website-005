import {
  StyledDiv,
  ContentDiv,
  DateP,
  ImageTitle,
  Creator,
  Hr,
  ReadDiv,
  Read,
  Arrow,
  WrapDiv,
} from "../styled-components/Image.styled";

export default function Image({ bg, dateTxt, title, creator, bgTablet }) {
  return (
    <WrapDiv>
      <StyledDiv bg={bg} bgTablet={bgTablet}>
        <ContentDiv>
          <DateP>{dateTxt}</DateP>
          <ImageTitle>{title}</ImageTitle>
          <Creator>{creator}</Creator>
          <Hr />
          <ReadDiv>
            <Read>READ STORY</Read>
            <Arrow src="./assets/shared/desktop/arrow.svg" />
          </ReadDiv>
        </ContentDiv>
      </StyledDiv>
    </WrapDiv>
  );
}
