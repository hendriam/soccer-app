import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { PlayerType } from "@/data";
import { CSS } from "@dnd-kit/utilities";

interface Props {
    player: PlayerType;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Droppable(props: Props) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: String(props.player.id),
    });

    const style = transform
        ? {
              transform: CSS.Translate.toString(transform),
              transition,
          }
        : undefined;

    return (
        <button
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            key={props.player.id}
            type="button"
            onClick={props.onClick}
            className="flex justify-center touch-none"
        >
            <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer hover:opacity-50">
                <div className="bg-stone-600 rounded-full ">
                    <Image
                        src={props.player.image}
                        width={50}
                        height={50}
                        alt={props.player.image}
                        className="rounded-full "
                    />
                </div>
                <span className="capitalize text-xs font-semibold">{props.player.name}</span>
            </div>
        </button>
    );
}
