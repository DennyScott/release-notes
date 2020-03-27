import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { useSpring, config, useChain, animated } from "react-spring";
import styled from "styled-components";

const Container = styled(animated.div)`
  position: relative;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
  opacity: 1;
`;

const Background = styled(animated.div)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Modal({ open, setOpen, children }) {
  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "20%", background: "#ccc" },
    to: { size: open ? "50%" : "10%", background: open ? "white" : "#ccc" }
  });

  useChain(open ? [springRef] : [springRef], [0, open ? 0.1 : 0.6]);

  if (!open) return null;

  return createPortal(
    <Background>
      <Container style={{ ...rest, width: size, height: size }}>
        {children}
      </Container>
    </Background>,
    document.body
  );
}

export default Modal;
