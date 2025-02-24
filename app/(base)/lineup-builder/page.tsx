import LineUpBuilderCard from "@/components/lineup-builder/lineup-builder-card";
import LineUpPrefillCard from "@/components/lineup-builder/lineup-prefill-card";

export default function Page() {
    return (
        <section className="max-w-7xl py-5 mx-auto">
            <div className="grid grid-cols-4 gap-2">
                {/* <LineUpPrefillCard /> */}
                <LineUpBuilderCard />
                {/* <LineUpPrefillCard />q */}
            </div>
        </section>
    );
}
