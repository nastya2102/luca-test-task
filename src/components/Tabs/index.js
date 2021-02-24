import styled from 'styled-components';

const Tabs =({tabs = [], activeTab, handleChangeTab}) => {
  return(
      <StyledContainer>
        {tabs.map((i, index) => (
          <Tab
            key={i.id}
            active={index === activeTab}
            onClick={() => handleChangeTab(index)}
          >
            {i.name}
          </Tab>))}
      </StyledContainer>
      )
};


const StyledContainer = styled.div`
  border-bottom: 1px solid #c6c7d4 !important;
  width: 100%;
  display: flex;
  div {
    max-width: 22vw;
  }
`;

const Tab = styled.div`
  margin-bottom: -2px;
  border-bottom: 2px solid transparent;
  padding: 5px 15px; 
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'Inter';
  font-size: 15px;
  font-weight: 600;
  
  ${({active}) => active && `
    border-bottom: 2px solid #3843D0;
    color: #3843D0;
  `}
`;

export default Tabs;