import { CardContent } from "../ui/card";
import {
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    rectSwappingStrategy,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { PlayerType, players } from "@/data";
import Droppable from "./lineup-builder-droppable";

export default function DragAndDropList() {
    const [lineUps, setLineUps] = useState<PlayerType[]>(players);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            const activeIndex = lineUps.findIndex((lineUp) => String(lineUp.id) === active.id);
            const overIndex = lineUps.findIndex((lineUp) => String(lineUp.id) === over.id);
            const newLineUps = [...lineUps];
            [newLineUps[activeIndex], newLineUps[overIndex]] = [
                newLineUps[overIndex],
                newLineUps[activeIndex],
            ];
            setLineUps(newLineUps);
        }
    }

    return (
        <CardContent className="py-5 bg-gray-800">
            <DndContext
                sensors={sensors}
                onDragEnd={handleDragEnd}
                collisionDetection={closestCenter}
            >
                <div className=" grid grid-cols-3 gap-14">
                    <SortableContext
                        strategy={rectSwappingStrategy}
                        items={lineUps.map((lineUp) => String(lineUp.id))}
                    >
                        {lineUps.map((lineUp) => (
                            <Droppable key={lineUp.id} player={lineUp} />
                        ))}
                    </SortableContext>
                </div>
            </DndContext>
        </CardContent>
    );
}
