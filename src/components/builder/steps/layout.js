import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Report from "../../report";

export const Step = styled.div`
  margin-top: 3rem;
  color: rgb(192, 192, 192);
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

export const Title = styled.div`
  color: rgb(72, 72, 72);
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  font-size: 1rem;
  color: rgb(167, 167, 167);
  margin-bottom: 3rem;
`;
export const Button = styled.button`
  width: 125px;
  height: 50px;
  font-size: 0.8rem;
  background-color: ${theme.primaryColor};
  color: #fff;
  cursor: pointer;

  &i {
    color: white;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-grow: 1;
  width: 70%;
`;

export const LeftPanel = styled.div`
  flex-grow: 6;
  width: ${props => (props.small ? "40%" : "60%")};
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
`;
export const RightPanel = styled.div`
  flex-grow: 4;
  width: ${props => (props.large ? "60%" : "40%")};
`;

export const Image = styled.img`
  width: 100%;
`;

export const ReportImage = styled(Report)`
  width: 100%;
`;

const PanelNavigation = styled.div``;

export function Next({ onNext }) {
  return (
    <PanelNavigation>
      <Button onClick={onNext}>
        NEXT <FontAwesomeIcon icon={faLongArrowAltRight} />
      </Button>
    </PanelNavigation>
  );
}
