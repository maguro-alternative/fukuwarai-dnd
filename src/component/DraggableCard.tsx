import React from "react";
import { useDrag } from "react-dnd";

type CardItem = {
    top: number;
    left: number;
    name: string;
    id: string;
};

const BoxStyle: React.CSSProperties = {
    position: "absolute",
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    cursor: "move"
};


export const DraggableCard: React.FC<{
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