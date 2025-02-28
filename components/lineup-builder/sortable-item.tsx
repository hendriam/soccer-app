import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { PlayerType } from "@/data";
import { CSS } from "@dnd-kit/utilities";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DialogSearchPlayer } from "../dialog-search-player";

interface Props {
    player: PlayerType;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SortableItem(props: Props) {
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
        <Dialog>
            <DialogTrigger asChild>
                <button
                    ref={setNodeRef}
                    style={style}
                    {...listeners}
                    {...attributes}
                    key={props.player.id}
                    type="button"
                    onClick={props.onClick}
                    className="flex flex-col max-w-fit items-center justify-center space-y-2 hover:opacity-50 cursor-pointer"
                >
                    <div className="bg-stone-600 rounded-full">
                        <Image
                            key={props.player.id}
                            src={props.player.image}
                            width={50}
                            height={50}
                            alt={props.player.image}
                            className="rounded-full"
                        />
                    </div>

                    <span className="capitalize text-xs font-semibold">{props.player.name}</span>
                </button>
            </DialogTrigger>
            <DialogSearchPlayer />
        </Dialog>
    );
}
