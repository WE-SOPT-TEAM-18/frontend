import React from 'react';
import styled from 'styled-components';
import { ic_all } from 'assets/index';
const Footer = () => {
  return (
    <>
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
      <FooterBtn>
        <button>서비스 코드</button>
      </FooterBtn>
      <Description>
        넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018 - 서울종로 - 0426호 전화번호: 080-001-9587 대표:
        레지널드 숀 톰프슨 이메일 주소: korea @netflix.com 주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스
        A동 20층 우편번호 03161 사업자등록번호: 165-87-00119 클라우드 호스팅: Amazon Web Services Inc. 공정거래위원회
        웹사이트
      </Description>
    </>
  );
};

export default Footer;

const FooterIcon = styled.div`
  width: 60px;
  margin-top: 40px;
  margin-bottom: 12px;
`;

const FooterList = styled.div`
  font-size: 11px;
  color: gray;
  & > ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
  }
`;

const FooterBtn = styled.div`
  font-size: 10px;
  color: none;
  & > button {
    color: #808080;
    border: 1px solid #808080;
    background-color: transparent;
    padding: 6px;
  }

  margin-bottom: 9px;
  margin-top: 20px;
`;
const Description = styled.div`
  font-size: 11px;
  line-height: 17px;
  color: #808080;
  margin-top: 13px;
`;
