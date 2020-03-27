import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import theme from "./theme";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const Builder = React.lazy(() => import("./pages/builder"));
const Previous = React.lazy(() => import("./pages/previous"));

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  font-family: "Roboto", sans-serif;
`;

const Header = styled.header`
  height: 75px;
  border-bottom: 2px solid #f3f3f4;
  padding-left: ${theme.padding};
  padding-right: ${theme.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: rgb(50, 50, 50);
`;

const Logo = styled.div``;

const UserMenu = styled.div``;
const Avatar = styled.div``;
const Username = styled.div``;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Logo>Company</Logo>
          <Navigation />
          <UserMenu>
            <Avatar />
            <Username>Denny</Username>
          </UserMenu>
        </Header>
        <Switch>
          <Route path="/previous">
            <Suspense fallback={<div />}>
              <Previous />
            </Suspense>
          </Route>
          <Route path="/guide"></Route>
          <Route path="/">
            <Suspense fallback={<div />}>
              <Builder />
            </Suspense>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
