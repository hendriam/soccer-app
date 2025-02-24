import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";

export default async function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-svh w-full">
            <Header />
            {children}
        </main>
    );
}
