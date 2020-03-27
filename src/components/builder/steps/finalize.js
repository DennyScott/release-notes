import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useCallback
} from "react";
import {
  useTransition,
  animated,
  config,
  useChain,
  useSpring
} from "react-spring";
import styled from "styled-components";
import {
  Step,
  Title,
  Description,
  LeftPanel,
  RightPanel,
  Image,
  Button
} from "./layout";
import finalize from "../../../images/finalize.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { faStamp } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../modal/modal";
import BuildInProgress from "../../build-in-progress";
import Close from "../../close";

const Build = styled(Button)`
  background-color: #57d4a0;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div``;
const ModalBody = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

const TransitionItem = styled(animated.div)`
  overflow: hidden;
  width: 100%;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 5em;
  font-weight: 800;
  will-change: transform, opacity, height;
  white-space: nowrap;
  cursor: pointer;
  line-height: 80px;
  display: flex;
  justify-content: center;
`;

const CloseIcon = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Finalize({ onNext }) {
  const [open, setOpen] = useState();
  const [isBuilt, setIsBuilt] = useState();
  const [toggle, setToggle] = useState(
    "Just a moment, your report is building!"
  );
  const transitions = useTransition(toggle, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)"
    },
    enter: [
      {
        opacity: 1,
        height: 60,
        innerHeight: 60,
        transform: "perspective(600px) rotateX(0deg)"
      }
    ],
    leave: [{ color: "#c23369", innerHeight: 0, opacity: 0, height: 0 }],
    config: config.molasses
  });

  useEffect(() => {
    setTimeout(() => {
      setToggle("Your report is ready, download below!");
      setIsBuilt(true);
    }, 5000);
  }, []);
  const springRef = useRef();
  const { size, opacity, ...restSpring } = useSpring({
    ref: springRef,
    config: config.gentle,
    from: { size: "0px", opacity: 0 },
    to: {
      size: isBuilt ? "100px" : "0px",
      opacity: 1
    }
  });

  useChain(open ? [springRef] : [springRef], [0, open ? 0.1 : 0.6]);
  const close = useCallback(() => {
    setOpen(false);
    setIsBuilt(false);
  }, []);

  return (
    <Fragment>
      <LeftPanel>
        <Step>Step 5</Step>
        <Title>Preview or Publish your notes</Title>
        <Description>
          Publish your release notes will generate your report while completing
          this release. If you dont want to publish the notes yet, and want to
          just see them, you can always preview :).
        </Description>
        <Buttons>
          <Build onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faHammer} /> Preview
          </Build>
          <Button>
            <FontAwesomeIcon icon={faStamp} /> Publish
          </Button>
        </Buttons>
      </LeftPanel>
      <RightPanel>
        <Image src={finalize} />
      </RightPanel>
      <Modal open={open} setOpen={setOpen}>
        <ModalContainer>
          <BuildInProgress />
          <ModalBody>
            {transitions.map(
              ({ item, props: { innerHeight, ...rest }, key }) => (
                <TransitionItem key={key} style={rest}>
                  <animated.div
                    style={{ overflow: "hidden", height: innerHeight }}
                  >
                    <Title>{item}</Title>
                  </animated.div>
                </TransitionItem>
              )
            )}
            {isBuilt && (
              <CloseIcon style={{ ...restSpring, width: size, height: size }}>
                <Close close={close} />
              </CloseIcon>
            )}
          </ModalBody>
        </ModalContainer>
      </Modal>
    </Fragment>
  );
}
