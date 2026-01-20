import NavBarItems from "./items";

interface NavBarListItemsProps {
    navItems: string[];
    activeItem: string | null;
    handleMouseEnter: (item: string) => void;
}


const NavBarListItems: React.FC<NavBarListItemsProps> = ({ navItems, activeItem, handleMouseEnter }) => {
    return (
        <ul className="flex-1 flex items-center justify-evenly px-40 h-full">
            {navItems.map((item) => (
                <NavBarItems
                    key={item}
                    item={item}
                    activeItem={activeItem}
                    handleMouseEnter={handleMouseEnter}
                />
            ))}
        </ul>
    )
}

export default NavBarListItems