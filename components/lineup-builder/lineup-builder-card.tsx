import { players } from "@/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { CirclePlus, CirclePlusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { LineupSelect } from "./lineup-select";

export default function LineUpBuilderCard() {
    return (
        <Card className="col-span-2 col-start-2">
            <CardHeader>
                <CardTitle className="text-lg font-bold">Lineup Builder</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="py-5">
                <LineupSelect />
            </CardContent>
            <CardContent className="py-5 bg-gray-800">
                <div className=" grid grid-cols-3 gap-3">
                    {players.map((player) => (
                        <div key={player.id} className="flex justify-center">
                            <button
                                key={player.id}
                                type="button"
                                className="flex flex-col justify-center items-center space-y-1 group cursor-pointer"
                            >
                                <div className="bg-stone-600 rounded-full  group-hover:opacity-50">
                                    <Image
                                        src={player.image}
                                        width={50}
                                        height={50}
                                        alt={player.name}
                                        className="rounded-full "
                                    />
                                </div>
                                <PlusIcon className="bg-gray-50 rounded-full text-gray-600 group-hover:opacity-50" />
                            </button>
                        </div>
                    ))}
                </div>
            </CardContent>
            <Separator />
            <CardFooter className="mt-3 flex justify-center items-center">
                <div>
                    <Button>Dowload Image</Button>
                </div>
            </CardFooter>
        </Card>
    );
}
