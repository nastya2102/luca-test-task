import React from 'react';
import {useMediaQuery} from 'react-responsive/src/index';

import styled from 'styled-components';
import Button from '../Button/index';

const Title = ({text, btnOnClick,  btnText, hiddeBtn, transparentBtn}) => {
  const isMobile = useMediaQuery({
    maxWidth: 1080
  });

  return (
    <StyledContainer isMobile={isMobile} transparentBtn={transparentBtn}>
      <StyledTitle>{text}</StyledTitle>
      {(!hiddeBtn || btnText && !hiddeBtn) && <Button btnBlue onClick={btnOnClick}>{btnText}</Button>}
    </StyledContainer>
  )
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  ${({isMobile, transparentBtn}) => transparentBtn && isMobile && `
    & > button {
      background-color: transparent;
      background: transparent !important;
      border: 3px solid transparent;
      box-shadow: 0px 2px 0px transparent;
      color: #9A9CB5;
      font-size: 16px;
    }
  `}
`;

const StyledTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
`;

export default Title;