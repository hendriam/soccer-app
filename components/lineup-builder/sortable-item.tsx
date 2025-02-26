import Image from "next/image";
import { PlusIcon } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { PlayerType } from "@/data";

export default function SortableItem({ player }: { player: PlayerType }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: String(player.id),
    });

    const style = transform
        ? {
              transform: `translate(${transform.x}px, ${transform.y}px)`,
          }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            key={player.id}
            className="flex justify-center"
        >
            <button
                key={player.id}
                type="button"
                className="flex flex-col justify-center items-center space-y-1 group cursor-pointer"
            >
                <div key={player.id} className="bg-stone-600 rounded-full  group-hover:opacity-50">
                    <Image
                        src={player.image}
                        width={50}
                        height={50}
                        alt={player.image}
                        className="rounded-full "
                    />
                </div>
                <span>{player.name}</span>
            </button>
        </div>
    );
}
