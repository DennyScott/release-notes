import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import theme from "../../theme";

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
`;

const ExternalLink = styled.a`
  text-decoration: none;
`;

const Item = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
  color: ${props => (props.active ? "rgb(94, 94, 94)" : "rgb(174, 174, 174)")};
  cursor: pointer;
`;

const NavBar = styled(animated.div)`
  height: 2px;
  background-color: ${theme.lighterColor};
  position: absolute;
  bottom: 0;
`;

const NAV_BAR_PADDING = 10;

function Navigation() {
  const builderRef = useRef();
  const previousRef = useRef();
  const guideRef = useRef();
  const githubRef = useRef();
  const containerRef = useRef();

  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(0);
  const [x, setX] = useState(0);
  const springProps = useSpring({ width, transform: `translateX(${x}px)` });

  useEffect(() => {
    let currentRef;

    switch (current) {
      case 0:
        currentRef = builderRef;
        break;
      case 1:
        currentRef = previousRef;
        break;
      case 2:
        currentRef = guideRef;
        break;
      case 3:
        currentRef = githubRef;
        break;
      default:
        currentRef = builderRef;
    }

    setWidth(currentRef.current.offsetWidth + NAV_BAR_PADDING);
    const xPosition =
      currentRef.current.getBoundingClientRect().left -
      containerRef.current.getBoundingClientRect().left -
      NAV_BAR_PADDING / 2;
    setX(xPosition);
  }, [current]);

  return (
    <Container ref={containerRef}>
      <NavigationLink to="/">
        <Item
          active={current === 0}
          onClick={() => setCurrent(0)}
          ref={builderRef}
        >
          Builder
        </Item>
      </NavigationLink>
      <NavigationLink to="/previous">
        <Item
          active={current === 1}
          onClick={() => setCurrent(1)}
          ref={previousRef}
        >
          Previous Releases
        </Item>
      </NavigationLink>
      <NavigationLink to="/guide">
        <Item
          active={current === 2}
          onClick={() => setCurrent(2)}
          ref={guideRef}
        >
          Guide
        </Item>
      </NavigationLink>
      <ExternalLink href="http://www.github.com" target="_blank">
        <Item
          active={current === 3}
          onClick={() => setCurrent(3)}
          ref={githubRef}
        >
          Github
        </Item>
      </ExternalLink>
      <NavBar style={springProps} />
    </Container>
  );
}

export default Navigation;
