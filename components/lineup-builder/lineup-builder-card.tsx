"use client";

import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { LineupSelect } from "./lineup-select";
import LineUpBuilderCardFooter from "./lineup-builder-card-footer";
import LineUpBuilderCardHeader from "./lineup-builder-card-header";
import DragAndDropList from "./drag-and-drop-list";

const playerImages = [
    "/vinicius.png",
    "/mbappe.png",
    "/rodrygo.png",
    "/modric.png",
    "/thcouameni.png",
    "/diaz.png",
];

export default function LineUpBuilderCard() {
    return (
        <Card className="col-span-2 col-start-2">
            <LineUpBuilderCardHeader />
            <Separator />
            <CardContent className="py-5">
                <LineupSelect />
            </CardContent>
            <DragAndDropList />
            <Separator />
            <LineUpBuilderCardFooter />
        </Card>
    );
}
