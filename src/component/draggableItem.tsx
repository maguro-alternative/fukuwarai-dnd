import { useDrag, DragSourceMonitor } from 'react-dnd';

interface DraggableItemProps {
    id: string;
    name: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, name }) => {
    const [{isDragging}, drag] = useDrag({
        type: id ,
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            {name}
        </div>
    );
};

export default DraggableItem;
