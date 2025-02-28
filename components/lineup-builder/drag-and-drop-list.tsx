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
import SortableItem from "./sortable-item";

export default function DragAndDropList() {
    const [lineUps, setLineUps] = useState<PlayerType[]>(players);
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
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

    const handleOnClick = () => {
        console.log("test");
    };

    return (
        <CardContent className="py-5 bg-gray-800">
            <div className=" grid grid-cols-3 gap-14 justify-items-center">
                <DndContext
                    id="builder-dnd"
                    sensors={sensors}
                    onDragEnd={handleDragEnd}
                    collisionDetection={closestCenter}
                >
                    <SortableContext
                        strategy={rectSwappingStrategy}
                        items={lineUps.map((lineUp) => String(lineUp.id))}
                    >
                        {lineUps.map((lineUp) => (
                            <SortableItem key={lineUp.id} player={lineUp} onClick={handleOnClick} />
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
        </CardContent>
    );
}
