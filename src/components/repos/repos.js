import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "../checkbox";

const Container = styled.div`
  width: 100%;
  height: 98%;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Menu = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
const Filter = styled.div``;

const FilterInput = styled.input`
  height: 2rem;
  width: 150px;
  font-size: 0.8rem;
  border: none;
`;
const Complete = styled.div``;
const CompleteButton = styled.button`
  color: white;
  height: 2rem;
  width: 150px;
  font-size: 0.8rem;
  /* border-radius: 10px; */
  background-color: ${theme.primaryColor};
`;
const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const ColumnOne = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const ColumnTwo = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  align-items: center;
`;

const ColumnThree = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  align-items: center;
  padding-right: 1rem;
`;

const Table = styled.div`
  background-color: rgb(250, 250, 250);
  height: 100%;
`;
const TableHeader = styled(Parent)`
  font-size: 0.7rem;
  height: 2rem;
  color: #aaa;
  background-color: white;
`;
const TableBody = styled.div`
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
`;
const Row = styled(Parent)`
  margin: 0.5rem;
  height: 3rem;
  color: #666;
  background-color: white;
  font-size: 0.9rem;
`;

function Repos({ onContinue }) {
  return (
    <Container>
      <Menu>
        <Filter>
          <FilterInput placeholder="Filter repos" />
        </Filter>
      </Menu>
      <Table>
        <TableHeader>
          <ColumnOne>Select</ColumnOne> <ColumnTwo>Name</ColumnTwo>{" "}
          <ColumnThree>Last Reported</ColumnThree>
        </TableHeader>
        <TableBody>
          <Row>
            <ColumnOne>
              <Checkbox checked />
            </ColumnOne>
            <ColumnTwo>Styled Components</ColumnTwo>
            <ColumnThree>June 15, 2019</ColumnThree>
          </Row>

          <Row>
            <ColumnOne>
              <Checkbox />
            </ColumnOne>
            <ColumnTwo>React DnD</ColumnTwo>
            <ColumnThree>Dec 21, 2019</ColumnThree>
          </Row>

          <Row>
            <ColumnOne>
              <Checkbox />
            </ColumnOne>
            <ColumnTwo>React Router</ColumnTwo>
            <ColumnThree>Jan 3, 2020</ColumnThree>
          </Row>

          <Row>
            <ColumnOne>
              <Checkbox />
            </ColumnOne>
            <ColumnTwo>Styled Components</ColumnTwo>
            <ColumnThree>June 15, 2019</ColumnThree>
          </Row>

          <Row>
            <ColumnOne>
              <Checkbox />
            </ColumnOne>
            <ColumnTwo>React DnD</ColumnTwo>
            <ColumnThree>Dec 21, 2019</ColumnThree>
          </Row>

          <Row>
            <ColumnOne>
              <Checkbox />
            </ColumnOne>
            <ColumnTwo>React Router</ColumnTwo>
            <ColumnThree>Jan 3, 2020</ColumnThree>
          </Row>

          <Row>
            <ColumnOne>
              <Checkbox />
            </ColumnOne>
            <ColumnTwo>Styled Components</ColumnTwo>
            <ColumnThree>June 15, 2019</ColumnThree>
          </Row>

          <Row>
            <ColumnOne>
              <Checkbox />
            </ColumnOne>
            <ColumnTwo>React DnD</ColumnTwo>
            <ColumnThree>Dec 21, 2019</ColumnThree>
          </Row>

          <Row>
            <ColumnOne>
              <Checkbox />
            </ColumnOne>
            <ColumnTwo>React Router</ColumnTwo>
            <ColumnThree>Jan 3, 2020</ColumnThree>
          </Row>
        </TableBody>
      </Table>
    </Container>
  );
}

export default Repos;
