import {useState} from 'react';
import styled from 'styled-components';
import SideBar from '../../components/SideBar/index';
import {menu} from "../../constains"
import Header from "../../components/Header/index";
import {useMediaQuery} from "react-responsive/src/index";

const Page = ({children, hideHeader}) => {
  const isMobile = useMediaQuery({
    maxWidth: 1080
  });

  const [activePage, setActivePage] = useState(menu.find(i => i.id === "5").id);

  const handleChange = (id) => {
    setActivePage(id);
  };

  return (<Container isMobile={isMobile}>
    <LeftSide isMobile={isMobile}>
      <SideBar
        activePage={activePage}
        menu={menu}
        handleChange={handleChange}
      />
    </LeftSide>
    <RightSide isMobile={isMobile}>
      {(!hideHeader || hideHeader && !isMobile) && <Header/>}
      <PageContainer isMobile={isMobile}>
        {children}
      </PageContainer>
    </RightSide>
  </Container>)
};

const LeftSide = styled.div`
  width: 350px;
  height: 100vh;
  overflow: hidden;
  ${({isMobile}) => isMobile && `
    width: 100%;
    height: 86px;
  `}
`;


const RightSide = styled.div`
 height: 100%;
 width: calc(100% - 350px);
 overflow: hidden;
 ${({isMobile}) => isMobile && `
    width: 100%;
     height: calc(100% - 86px);
 `}
`;

const PageContainer = styled.div`
  width: 700px; 
  margin: 0 auto;
  height: calc(100% - 70px);
  overflow: auto;  
  ${({isMobile}) => isMobile && `
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
 `}
`;


const Container = styled.div`
  display: flex;
  height: 100vh;
  ${({isMobile}) => isMobile && `
    flex-direction: column-reverse;
    background: white;
  `}
`;

export default Page;