import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faHeart,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../images/avatar.png";
import Repos from "../../components/repos";

const Card = styled.div`
  box-shadow: ${props =>
    props.center
      ? "2px 2px 10px 10px rgba(44, 44, 44, 0.1)"
      : "1px 1px 5px 5px rgba(44, 44, 44, 0.05)"};
  height: 300px;
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardBody = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 2rem;
  background-color: ${props =>
    props.color ? props.color : "rgba(250, 234, 235)"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  margin-top: 3rem;
`;

const Line = styled.div`
  border-top: 1px solid #ddd;
  width: 75px;
`;

const CardIcon = styled.div``;
const CardMetric = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: rgb(50, 50, 50);
`;
const CardTitle = styled.div`
  font-size: 0.9rem;
  color: rgb(160, 160, 160);
`;

const MetricContainer = styled.div``;
const Avatars = styled.div`
  display: flex;
  justify-content: center;
`;
const CardAvatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-left: 2px;
  margin-right: 2px;
`;

function Previous() {
  return (
    <Container>
      <CardRow>
        <Card>
          <CardBody>
            <CardIcon>
              <Icon color="#618bd4">
                <FontAwesomeIcon color="white" icon={faRocket} />
              </Icon>
            </CardIcon>
            <MetricContainer>
              <CardMetric>1.3.4 React DnD</CardMetric>
              <CardTitle>Last Release</CardTitle>
            </MetricContainer>
            <Line />
            <Avatars>
              <CardAvatar src={Avatar} />
              <CardAvatar src={Avatar} />
              <CardAvatar src={Avatar} />
              <CardAvatar src={Avatar} />
            </Avatars>
          </CardBody>
        </Card>
        <Card center>
          <CardBody>
            <CardIcon>
              <Icon>
                <FontAwesomeIcon color="#eb4034" icon={faHeart} />
              </Icon>
            </CardIcon>
            <MetricContainer>
              <CardMetric>87</CardMetric>
              <CardTitle>Total Releases</CardTitle>
            </MetricContainer>
            <Line />
            <Avatars>
              <CardAvatar src={Avatar} />
              <CardAvatar src={Avatar} />
              <CardAvatar src={Avatar} />
              <CardAvatar src={Avatar} />
            </Avatars>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardIcon>
              <Icon color="#57d4a0">
                <FontAwesomeIcon color="white" icon={faDownload} />
              </Icon>
            </CardIcon>
            <MetricContainer>
              <CardMetric>982</CardMetric>
              <CardTitle>Total Downloads</CardTitle>
            </MetricContainer>
            <Line />
            <Avatars>
              <CardAvatar src={Avatar} />
              <CardAvatar src={Avatar} />
              <CardAvatar src={Avatar} />
              <CardAvatar src={Avatar} />
            </Avatars>
          </CardBody>
        </Card>
      </CardRow>

      <Repos />
    </Container>
  );
}

export default Previous;
