import React from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";

const ContainerStyle: React.CSSProperties = {
  width: 500,
  height: 500,
  backgroundColor: "silver"
};

const BoxStyle: React.CSSProperties = {
  position: "absolute",
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  cursor: "move"
};

type Box = {
  top: number;
  left: number;
  name: string;
  id: string;
};

export type CardItem = {
  top: number;
  left: number;
  name: string;
  id: string;
};

const DraggableCard: React.FC<{
  top: number;
  left: number;
  name: string;
  id: string;
}> = ({ top, left, name, id }) => {
  const [{ isDragging }, drag] = useDrag<
    CardItem,
    Record<string, never>,
    { isDragging: boolean }
  >(
    () => ({
      type: "box",
      item: {
        top,
        left,
        name,
        id,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [top, left, name, id]
  );
  return (
    <div ref={drag} style={{ ...BoxStyle, opacity: isDragging ? 0.5 : 1, top: top, left: left }}>
        Drag me around
    </div>
  );
};

export const Example: React.FC = () => {
  const [box, setBox] = React.useState([
    { top: 100, left: 100, name: "CARD1", id: "1" },
    { top: 200, left: 200, name: "CARD2", id: "2" },
  ]);

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item: Box, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        setBox((prev) => [
          ...prev.filter((data) => data.id !== item.id),
          {
            top:top,
            left:left,
            name: item.name,
            id: item.id,
          },
        ]);
      }
    }),
    []
  );

  return (
    <div ref={drop} style={ContainerStyle}>
      {box.map((item) => (
        <DraggableCard top={item.top} left={item.left} name={item.name} id={item.id} />
      ))}
    </div>
  );
};

