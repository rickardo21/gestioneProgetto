import { Gem } from "lucide-react"

const NavBarTitle = () => {
    return (
        <a
            href="/"
            className="hover:text-black transition-colors opacity-80 hover:opacity-100"
        >
            <div className="text-[16px] flex gap-3 items-center font-semibold text-black select-none tracking-wide">
                <Gem className="w-4 h-4" />
                EcoBase
            </div>
        </a>

    )
}

export default NavBarTitle