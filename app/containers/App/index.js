/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import OrderPage from 'containers/OrderPage/Loadable';
import CameraPage from 'containers/CameraPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/camera" component={CameraPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
