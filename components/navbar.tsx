import { Settings } from "lucide-react";
import Link from "next/link";
import DropdownPage from "./dropdown-page";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <Link href="/" className="font-bold text-2xl">
                SoccerApp
            </Link>

            <div className="flex space-x-10">
                <DropdownPage />
                <button className="cursor-pointer">
                    <Settings />
                </button>
            </div>
        </nav>
    );
}
