import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export function DialogSearchPlayer() {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Search Player</DialogTitle>
                <DialogDescription>Search your favorite players.</DialogDescription>
            </DialogHeader>
        </DialogContent>
    );
}
