import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  width: 100%;
  height: 98%;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  position: relative;
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

const data = [
  {
    id: "1",
    name: "Styled Components",
    date: "June 15, 2019"
  },

  { id: "2", name: "React DnD", date: "Dec 21, 2019" },

  { id: "3", name: "React Router", date: "Jan 3, 2020" },
  { id: "8", name: "Styled Components", date: "June 15, 2019" },

  { id: "4", name: "React DnD", date: "Dec 21, 2019" },

  { id: "5", name: "React Router", date: "Jan 3, 2020" },
  { id: "9", name: "Styled Components", date: "June 15, 2019" },

  { id: "6", name: "React DnD", date: "Dec 21, 2019" },

  { id: "7", name: "React Router", date: "Jan 3, 2020" }
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  padding: grid
});

function Order({ onContinue }) {
  const [items, setItems] = useState(data);

  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const itemsTemp = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(itemsTemp);
  };
  return (
    <Container>
      <Table>
        <TableHeader>
          <ColumnOne>Position</ColumnOne>
          <ColumnTwo>Name</ColumnTwo>
          <ColumnThree>Last Reported</ColumnThree>
        </TableHeader>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <TableBody
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <Row
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <ColumnOne>{index}</ColumnOne>
                        <ColumnTwo>{item.name}</ColumnTwo>
                        <ColumnThree>{item.date}</ColumnThree>
                      </Row>
                    )}
                  </Draggable>
                ))}
              </TableBody>
            )}
          </Droppable>
        </DragDropContext>
      </Table>
    </Container>
  );
}

export default Order;
