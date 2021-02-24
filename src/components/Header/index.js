import React from 'react';
import styled from 'styled-components';
import Button from '../Button'
import Fire from '../../access/svg/fire';
import Police from '../../access/svg/police';
import Flower from '../../access/svg/flower';
import Bell from '../../access/svg/bell';
import {score} from '../../constains';
import Profile from "../../access/svg/profile";
import Search from "../../access/svg/search";
import Logo from "../../access/svg/logo";
import {useMediaQuery} from "react-responsive/src/index";

const Header =() => {
  const isMobile = useMediaQuery({
    maxWidth: 1080
  });
  return(
    <HeaderContainer isMobile={isMobile}>
    <LeftSide>
      {isMobile && <Logo />}
      {!isMobile &&
      <>
        <Button>Explorar</Button>
        <Search />
      </>
      }
    </LeftSide>
      {!isMobile &&
      <CenterContainer>
        <div>
          <Fire />
          <span>{score.fire}</span>
        </div>
        <div>
          <Police />
          <span>{score.police}</span>
        </div>
        <div>
          <Flower />
          <span>{score.flower}</span>
        </div>
      </CenterContainer>}

    <RightSide>
      <Bell />
      <Profile color='#3843D0'/>
    </RightSide>
  </HeaderContainer>)
};


const HeaderContainer = styled.div`
 width: 100%;
 box-sizing: border-box;
 padding: 15px 30px; 
 display: flex;
 justify-content: space-between;
 align-items: center;
 
 & > div {
   width: 30%;
   height: 40px;
 }
 
 ${({isMobile}) => isMobile &&`
  padding: 16px;
  box-shadow: 0px 1px 0px rgba(38, 38, 38, 0.08);
 `}
`;

const CenterContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 & > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
 }
 span {
   font-family: Poppins;
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   line-height: 24px;
   color: #D9DAE3;
   margin-left: 10px;
 }
 `;



const LeftSide = styled.div`
  width: 160px!important;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightSide = styled.div`
  width: 90px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 32px;
    height: 32px;
  }
`;



export default Header;