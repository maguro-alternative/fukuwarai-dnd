import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
//import DraggableItem from './draggableItem';
//import DroppableArea from './droppableArea';
import { DroppableArea } from "./droppableArea";

//import { Example } from "./Example";

const Board = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>

        <DroppableArea />

      </DndProvider>
    </div>
  );
};

export default Board;
