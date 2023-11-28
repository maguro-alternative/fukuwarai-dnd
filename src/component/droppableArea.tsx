import { useDrop } from 'react-dnd';

interface DroppableAreaProps {
    id: string;
    accept: string;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ id, accept }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: accept,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <div ref={drop} style={{ background: isOver ? 'lightgrey' : 'white' }}>
            {canDrop ? 'Drop here!' : 'Drag piece here'}
        </div>
    );
};

export default DroppableArea;
