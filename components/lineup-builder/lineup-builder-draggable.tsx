"use client";

import { PlayerType } from "@/data";
import Image from "next/image";
import { PlusIcon } from "lucide-react";
import { useDraggable } from "@dnd-kit/core";

export default function Draggable({ player }: { player: PlayerType }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: player.id,
    });

    const style = transform
        ? {
              transform: `translate(${transform.x}px, ${transform.y}px)`,
          }
        : undefined;

    return (
        <button
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            type="button"
            className="flex flex-col justify-center items-center space-y-1 group cursor-pointer"
            style={style}
        >
            <div className="bg-stone-600 rounded-full  group-hover:opacity-50">
                <Image
                    src={player.image}
                    width={50}
                    height={50}
                    alt={player.image}
                    className="rounded-full "
                />
            </div>
            <PlusIcon className="bg-gray-50 rounded-full text-gray-600 group-hover:opacity-50" />
        </button>
    );
}
