import React from 'react';
import Header from 'components/Common/Header';
import Billboard from 'components/Main/Billboard';
import UserPick from 'components/Main/UserPick';
import UserRecommend from 'components/Main/UserRecommend';
import Footer from 'components/Common/Footer';
import Top10List from 'components/Main/Top10List';

const Main = () => {
  return (
    <>
      <Header />
      <Billboard />
      <UserPick />
      <Top10List />
      <UserRecommend />
      <Footer />
    </>
  );
};

export default Main;
