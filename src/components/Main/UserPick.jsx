import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeartContent from './HeartContent';
import WatchingContent from './WatchingContent';
import { client } from 'libs/api';

const UserPick = ({ flag, setFlag }) => {
  const [watchingList, setWatchingList] = useState([]);
  const [heartList, setHeartList] = useState([]);

  const getWatchingList = async () => {
    const { data } = await client.get('/watching');
    setWatchingList(data.data);
  };

  const getHeartList = async () => {
    const { data } = await client.get('/like');
    setHeartList(data.data);
  };

  useEffect(() => {
    getWatchingList();
    getHeartList();
  }, [flag]);

  return (
    <StyledUserPick>
      <WatchingContent setFlag={setFlag} watchingList={watchingList} />
      <HeartContent setFlag={setFlag} heartList={heartList} />
    </StyledUserPick>
  );
};

export default UserPick;

const StyledUserPick = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  top: 50.8rem;

  @media ${({ theme }) => theme.device.tablet} {
    position: relative;
    top: 8.5rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    top: 23.5rem;
  }
`;
