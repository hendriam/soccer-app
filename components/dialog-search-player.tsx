import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import Image from "next/image";
import { PlayerType, players } from "@/data";
import { ScrollArea } from "./ui/scroll-area";

export function DialogSearchPlayer() {
    return (
        <DialogContent className="">
            <DialogHeader>
                <DialogTitle>Search Player</DialogTitle>
                <DialogDescription>Search your favorite players.</DialogDescription>
                <Input className="bg-accent py-3" placeholder="search name.." />
            </DialogHeader>
            <Separator />
            <ScrollArea className="md:max-h-96 flex flex-col">
                {players.map((player) => (
                    <div
                        key={player.id}
                        className="flex space-x-2 dark:hover:bg-slate-900 hover:bg-accent cursor-pointer px-2 py-3 rounded-l-md rounded-lt-md "
                    >
                        <div className="dark:bg-slate-600 bg-slate-300 rounded-full">
                            <Image
                                src={player.image}
                                width={35}
                                height={35}
                                alt={player.image}
                                className="rounded-full"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="font-semibold capitalize text-sm">{player.name}</p>
                            <p className="font-semibold capitalize text-xs text-primary/80">
                                Attacker
                            </p>
                        </div>
                    </div>
                ))}
            </ScrollArea>
        </DialogContent>
    );
}
