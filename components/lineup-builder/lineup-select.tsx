import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function LineupSelect() {
    return (
        <Select>
            <SelectTrigger className="max-w-[130px]">
                <SelectValue placeholder="Select lineup" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="4-3-3">4-3-3</SelectItem>
                <SelectItem value="4-4-2">4-4-2</SelectItem>
                <SelectItem value="4-2-3-1">4-2-3-1</SelectItem>
                <SelectItem value="4-1-4-1">4-1-4-1</SelectItem>
                <SelectItem value="4-3-2-1">4-3-2-1</SelectItem>
            </SelectContent>
        </Select>
    );
}
