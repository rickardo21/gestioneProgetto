interface NavBarItemsProps {
    item: string;
    activeItem: string | null;
    handleMouseEnter: (item: string) => void;
}

const NavBarItems: React.FC<NavBarItemsProps> = ({ item, activeItem, handleMouseEnter }) => {
    return (
        <li
            key={item}
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter(item)}
        >
            <a
                href={""}
                className={`transition-colors tracking-wide px-2 cursor-pointer
                  ${activeItem === item ? "text-black opacity-100" : "opacity-80 hover:opacity-100 hover:text-black"}`}
            >
                {item}
            </a>
        </li>
    )
}

export default NavBarItems