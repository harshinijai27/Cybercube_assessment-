import * as React from "react";
import styled from "styled-components";
import MainContainer from './MainContainer';

const AppContainer = styled.div`
  height: 100%;
  background: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorTextDefault};
`;

const App = () => (
  <AppContainer>
    <MainContainer />
  </AppContainer>
);
export default App;
