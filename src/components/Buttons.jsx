import { Menu } from "lucide-react";

export default function CategoryButton(){
    return <button className="bg-black hidden sm:flex px-4 py-3 rounded-lg text-white flex-row items-center gap-1">
        <Menu className="h-5 w-5" />
        <p className="text-sm font-normal">Categories</p>
    </button>
}