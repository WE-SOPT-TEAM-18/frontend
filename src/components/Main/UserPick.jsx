import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const UserPick = () => {
  const [current, setCurrent] = useState('2');
  const [prev, setPrev] = useState(null);

  const handleClick = (e) => {
    setCurrent(e.target.id);
  };

  useEffect(() => {
    if (current !== null) {
      const currentBtn = document.getElementById(current);
      currentBtn.style.color = '#d32f27';
    }
    if (prev !== null) {
      const prevBtn = document.getElementById(prev);
      prevBtn.style.color = '#ffffff';
    }
    setPrev(current);
  }, [current]);

  return (
    <StyledUserPick>
      <div>
        <h2>박수아님이 시청중인 콘텐츠</h2>
      </div>
      <div>
        <h2>내가 찜한 콘텐츠</h2>
        <StyledBtnWrapper>
          <button onClick={handleClick} id="1">
            #시험 끝나면 볼 영화
          </button>
          <button onClick={handleClick} id="2">
            #슬픈 영화
          </button>
          <button onClick={handleClick} id="3">
            #슬기로운 시리즈
          </button>
          <button onClick={handleClick} id="4">
            #마음의 평화
          </button>
          <button onClick={handleClick} id="5">
            #무서운거
          </button>
          <button onClick={handleClick} id="6">
            #음식
          </button>
        </StyledBtnWrapper>
      </div>
    </StyledUserPick>
  );
};

export default UserPick;

const StyledUserPick = styled.div`
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  & > div {
    margin-bottom: 3rem;
    & > h2 {
      margin-bottom: 0.8rem;
    }
  }
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  & > button {
    background: transparent;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 0;
    margin-right: 1.5rem;
    margin-bottom: 0.8rem;
  }
  & > button.clicked {
    color: #d32f27;
  }
`;
