import React from "react";
import { useDrop, XYCoord } from "react-dnd";
import { DraggableCard } from "./DraggableCard";

import nijimuraHidarime from "/nijimurahidarime.png";
import nijimuraMigime from "/nijimuramigime.png";

import nijimuraHidarimayu from "/nijimurahidarimayu.png";
import nijimuraMigimayu from "/nijimuramigimayu.png";

import nijimuraHidarisiwa from "/nijimurahidarisiwa.png";
import nijimuraMigisiwa from "/nijimuramigisiwa.png";

import nijimuraKuchi from "/nijimurakuchi.png";

import nijimuraMiken from "/nijimuramiken.png";

import nijimuraHana from "/nijimurahana.png";

const ContainerStyle: React.CSSProperties = {
  width: 1900,
  height: 1000,
  backgroundColor: "silver"
};

type Box = {
  top: number;
  left: number;
  name: string;
  id: string;
};

export const Example: React.FC = () => {
  const [box, setBox] = React.useState([
    { top: 100, left: 100, name: nijimuraHidarime, id: "1" },
    { top: 200, left: 200, name: nijimuraMigime, id: "2" },
    { top: 200, left: 300, name: nijimuraHidarimayu, id: "3" },
    { top: 200, left: 300, name: nijimuraMigimayu, id: "4" },
    { top: 200, left: 300, name: nijimuraHidarisiwa, id: "5" },
    { top: 200, left: 300, name: nijimuraMigisiwa, id: "6" },
    { top: 200, left: 300, name: nijimuraKuchi, id: "7" },
    { top: 200, left: 300, name: nijimuraMiken, id: "8" },
    { top: 200, left: 300, name: nijimuraHana, id: "9" },
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

