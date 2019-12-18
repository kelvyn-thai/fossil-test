import styled from "styled-components";

export const StyledFonts = styled.div`
  @font-face {
    font-family: Montserrat-Bold;
    src: url(fonts/Montserrat/Montserrat-Bold.ttf);
  }
  @font-face {
    font-family: Montserrat-Regular;
    src: url(fonts/Montserrat/Montserrat-Regular.ttf);
  }
`;

export const Styled = styled(StyledFonts)`
  &.open-popup {
    overflow: hidden;
    max-height: 100vh;
    height: 100vh;
  }
  * {
    font-family: Montserrat-Regular;
    color: #000;
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
