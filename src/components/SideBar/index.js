import React from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {useMediaQuery} from "react-responsive/src";
import Logo from "../../access/svg/logo";

const SideBar = ({menu, handleChange}) => {
    const {pathname} = useLocation();
    const currentPath = "/" + pathname.split('/')[1];
    const isMobile = useMediaQuery({maxWidth: 1080});

    return (<SideContainer isMobile={isMobile}>
        <LogoContainer isMobile={isMobile}>
            <Logo/>
        </LogoContainer>
            <LinksContainer isMobile={isMobile}>
                {menu.map((item) => (
                    <StyledLink
                        isMobile={isMobile}
                        key={item.id}
                        selected={item.link === currentPath}
                        href={item.link}
                        onClick={() => handleChange(item.id)}
                    > {item.icon}
                        <span>{item.name}</span>
                    </StyledLink>)
                )}
            </LinksContainer>
    </SideContainer>)
};
const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: auto;
  ${({isMobile}) => isMobile && `
    border-top: 1px solid #c5c5c5;
    box-sizing: border-box;
    padding: 0 16px;
    justify-content: space-around;
    flex-direction: row;
    span {
      display: none;
    }
  `}
`;

const LogoContainer = styled.div`
  svg {
    width: 101px;
    height: 32.16px;
    padding-top: 24px;
    padding-left: 24px;
   }
   ${({isMobile}) => isMobile && `
    display: none;
  `}
`;
const LinksContainer = styled.div`
  flex-direction: column;
  height: 40px;
  display: flex;
  ${({isMobile}) => isMobile ? `
   justify-content: space-between;
   flex-direction: row;
   width: inherit;
   margin: 0 16px;
   padding: 4px, 16px, 4px, 12px;
   & > *:last-child {
     display: none;
   }
      span {
        display: none;
      }`
   : `
    border-radius: 48px;
    margin: 44px 0 0 22px;
    padding: 4px, 12px, 4px, 12px;
  `}
`;

const StyledLink = styled.a`
  padding: 8px 16px;
  line-height: 24px;
  font-family: Poppins;
  color: #9a9cb5;
  font-size: 16px;
  display: flex;
  text-decoration: none;
  height: 80px;
  margin-bottom: 18px;
  width: fit-content;
  align-items: center;
  
  ${({isMobile}) => isMobile ? `
    padding: 0;
    width: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
     background-color: transparent;
   }
  `:`
    svg {
      margin-right: 8px;
    }
    border-radius: 40px;
  `}
  
  ${({selected, isMobile}) => selected && `
     font-weight: 600;
     color: #3843D0;
     background-color: ${isMobile ? 'transparent' : '#edeefe'};
     ${isMobile && `
     border-top: 4px solid #3843D0;
     height: 72px;
    `}
  `}
`;

export default SideBar