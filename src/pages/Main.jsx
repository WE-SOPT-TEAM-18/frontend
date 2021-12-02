import React, { useState } from 'react';
import Header from 'components/Common/Header';
import Billboard from 'components/Main/Billboard';
import UserPick from 'components/Main/UserPick';
import UserRecommend from 'components/Main/UserRecommend';
import Footer from 'components/Common/Footer';
import Top8List from 'components/Main/Top8List';

const Main = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <Header />
      <Billboard />
      <UserPick flag={flag} setFlag={setFlag} />
      <Top8List flag={flag} setFlag={setFlag} />
      <UserRecommend flag={flag} setFlag={setFlag} />
      <Footer />
    </>
  );
};

export default Main;
