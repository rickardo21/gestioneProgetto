import { Languages, Search } from "lucide-react"

const RightSideNav = () => {
    return (
        <div className="flex items-center gap-4 md:gap-6 pl-2">
            <a
                href="#"
                className="hover:text-black transition-colors opacity-80 hover:opacity-100"
            >
                <Search className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
            <a
                href="#"
                className="hover:text-black transition-colors opacity-80 hover:opacity-100"
            >
                <Languages className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
        </div>
    )
}

export default RightSideNav