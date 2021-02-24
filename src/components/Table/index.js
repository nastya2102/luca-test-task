import React from 'react';
import styled from 'styled-components';
import Profile from '../../access/svg/profile';
import Like from '../../access/svg/like';
import Star from '../../access/svg/star';
import Share from '../../access/svg/share';
import Comment from '../../access/svg/comment';
import {useMediaQuery} from 'react-responsive/src';

const Table = ({row, activePage, onStar}) => {
  const colors = ['#3843D0', '#FFD704', '#F96654', '#FC9CFE'];
  const isMobile = useMediaQuery({
    maxWidth: 1080
  });

  return (
    <TableContainer>
      {row.map((i, index) =>
        <RowContainer key={i.id} isMobile={isMobile}>
          {isMobile && <>
            <ProfileContainer>
              <Profile color={colors[index % 4]}/>
              <div>
                <Like/>
                <Like isDislike/>
              </div>
            </ProfileContainer>
            <MainContainer isMobile>
              <div>
                <RowTitle>{i.title}</RowTitle>
                <RowSubTitle>{i.subTitle}</RowSubTitle>
              </div>
              <BottomContainer isMobile>
                <RowSubTitle isMobile>
                  <span>{i.theme.match(/\s.+/)}</span>
                  <Subject>{i.subject}</Subject>
                </RowSubTitle>
                <MobileButtonsContainer>
                  <CommentContainer isMobile>
                    <Comment/>
                    <div>{i.answersCount}</div>
                  </CommentContainer>
                  <div onClick={() => onStar(i.id)}>
                    <Star fill={i.isStar}/>
                  </div>
                </MobileButtonsContainer>
              </BottomContainer>
            </MainContainer>
          </>}
          {!isMobile && <>
            <Profile color={colors[index % 4]}/>
            <MainContainer>
              <RowTitle>{i.title}</RowTitle>
              <RowSubTitle>{i.subTitle}</RowSubTitle>
              <BottomContainer>
                <Like/>
                <Like isDislike/>
                <RowSubTitle isBottom>{i.theme} <Subject>{i.subject}</Subject></RowSubTitle>
              </BottomContainer>
            </MainContainer>
            <RightContainer>
              <CommentContainer>
                <Comment/>
                <div>{i.answersCount}</div>
              </CommentContainer>
              <BottomContainer share>
                <Share/>
                <div onClick={() => onStar(i.id)}>
                  <Star fill={i.isStar}/>
                </div>
              </BottomContainer>
            </RightContainer>
          </>}
        </RowContainer>
      )}
    </TableContainer>)
};

const TableContainer = styled.div`
  padding: 16px 0 70px;
`;

const RowContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #c6c7d4 !important;
  justify-content: space-between;
  padding: ${({isMobile}) => isMobile ? '16px 0 14px'  : '24px 24px 16px 8px'}
`;

const RowTitle = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #4F4F4F;
  margin-bottom: 8px;
  margin-top: 0;
  display: -webkit-box;
  max-width: 450px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;


const RowSubTitle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: #828282;
  opacity: 0.7;
  width: 100%;
  padding: ${({isBottom}) => isBottom ? '0 0 0 25px' : '0 0 10px 0'} 

  ${({isMobile}) => isMobile && `
  width: 200px;
  & span {
    max-width: 45%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
  }
  `}
`;

const MainContainer = styled.div`
  width: 450px;
  ${({isMobile}) => isMobile &&`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;

const ProfileContainer = styled.div`
  max-width: 84px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 24px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
  svg:not(:last-of-type) {
    padding-right: 15px;
  }
  ${({isMobile}) => isMobile &&`
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
   `}
   ${({share}) => share && `
    & > div:last-child > svg {
       padding-left: 15px;
    }`
   }
`;

const MobileButtonsContainer = styled.div`
 padding-right: 8px;
 & > div {
   display: flex;
   align-items: center;
   padding-left: 18px;
 }
`;

const Subject = styled.span`
  color: #3843D0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #9A9CB5;
  div {
   margin-left: ${({isMobile}) => isMobile ? '3px' : '7px'};
  }
`;


export default Table