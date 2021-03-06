import React from 'react';
import styled from 'styled-components';
import { ic_all } from 'assets/index';
const Footer = () => {
  const Subtitle = `넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018 - 서울종로 - 0426호
전화번호: 080-001-9587 
대표: 레지널드 숀 톰프슨
이메일 주소: korea @netflix.com 
주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161
사업자등록번호: 165-87-00119
클라우드 호스팅: Amazon Web Services Inc.
공정거래위원회 웹사이트`;

  return (
    <StyledRoot>
      <FooterIcon>
        <img className="icon_all" src={ic_all} />
      </FooterIcon>
      <FooterList>
        <ul>
          <li>자막 및 음성</li>
          <li>음성 지원</li>
          <li>고객 센터</li>
          <li>기프트 카드</li>
          <li>자막 및 음성</li>
          <li>미디어 카드</li>
          <li>투자정보</li>
          <li>입사 정보</li>
          <li>이용약관</li>
          <li>개인 정보</li>
          <li>법적 고지</li>
          <li>쿠키 설정</li>
          <li>회사 정보</li>
          <li>문의 정보</li>
        </ul>
      </FooterList>
      <FooterDiv>서비스 코드</FooterDiv>
      <Description>{Subtitle}</Description>
    </StyledRoot>
  );
};

export default Footer;

const StyledRoot = styled.div`
  width: 70vw;
  max-width: 70rem;
  align-self: center;
  margin-bottom: 5.1rem;
  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 3.2rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 13.4rem;
  }
`;

const FooterIcon = styled.div`
  width: 6rem;
  margin-top: 4rem;
  margin-bottom: 1.2rem;
`;

const FooterList = styled.div`
  font-size: 1.1rem;
  color: gray;
  & > ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;
    @media ${({ theme }) => theme.device.mobile} {
      grid-gap: 0.8rem;
    }
  }
`;

const FooterDiv = styled.div`
  width: fit-content;
  margin-top: 2rem;
  margin-bottom: 0.9rem;
  font-size: 1rem;
  color: #808080;
  border: 1px solid #808080;
  padding: 0.6rem;
`;

const Description = styled.div`
  white-space: pre-wrap;
  width: 100%;
  font-size: 1.1rem;
  line-height: 1.7rem;
  color: #808080;
  margin-top: 1.3rem;
`;
