import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

export default memo(withRouter(({ children }) => (
  <>
    <Header />
    <Body>
      {children}
    </Body>
    <Footer />
  </>
)));
