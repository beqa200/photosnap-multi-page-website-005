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
} from "../styled-components/Image.styled";

export default function Image({ bg, dateTxt, title, creator }) {
  return (
    <StyledDiv bg={bg}>
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
  );
}
