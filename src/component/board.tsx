import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
//import DraggableItem from './draggableItem';
//import DroppableArea from './droppableArea';

import { Example } from "./Example";

const Board = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>

        <Example />

      </DndProvider>
    </div>
  );
};

export default Board;
