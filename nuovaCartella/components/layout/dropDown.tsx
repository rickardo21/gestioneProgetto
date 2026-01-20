"use client";

interface NavbarDropDownSectionProps {
    isDropdownVisible: boolean;
    activeItem: string | null;
    onMouseEnter: () => void;
    handleMouseLeave: () => void;
    currentDropdownData: { title: string; items: string[] }[];
}

const NavBarDropDownSection: React.FC<NavbarDropDownSectionProps> = ({
    isDropdownVisible,
    activeItem,
    onMouseEnter,
    handleMouseLeave,
    currentDropdownData
}) => {
    return (
        <div
            className={`absolute top-full left-0 w-full bg-white text-gray-900 transition-all duration-500 ease-in-out overflow-hidden ${isDropdownVisible && activeItem ? "max-h-[600px] opacity-100" : "max-h-0 h-0 opacity-0"
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`max-w-[1024px] mx-auto px-4 py-10 grid grid-cols-12 gap-8 transition-opacity duration-300 delay-100 ${isDropdownVisible ? 'opacity-100' : 'opacity-0'}`}>
                {currentDropdownData.map((section, idx) => (
                    <div key={idx} className="col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-2 space-y-4">
                        <h3 className="text-[12px] font-normal text-gray-500 select-none tracking-wide">{section.title}</h3>
                        <ul className="space-y-1.5 flex flex-col">
                            {section.items.map((link) => {
                                // Converti il nome in URL valido
                                var urlPath = link
                                    .toLowerCase()
                                    .replace(/\s*\(.*?\)\s*/g, '') // Rimuovi contenuto tra parentesi
                                    .replace(/\s*&\s*/g, '-') // Sostituisci & con -
                                    .replace(/\s+/g, '-') // Sostituisci spazi con -
                                    .replace(/[^\w-]/g, ''); // Rimuovi caratteri speciali

                                if (urlPath == "imposte-e-tasse") {
                                    urlPath = "imposte-tasse";
                                }
                                if (urlPath == "imposte-dirette") {
                                    urlPath = "imposte-tasse#imposte-dirette"
                                }
                                if (urlPath == "imposte-indirette") {
                                    urlPath = "imposte-tasse#imposte-indirette"
                                }

                                if (urlPath == "tutti-i-temi") {
                                    urlPath = "#features"
                                }

                                return (
                                    <li key={link}>
                                        <a href={"/" + urlPath} className="text-[14px] sm:text-[17px] lg:text-[24px] font-semibold leading-tight text-gray-900/80 hover:text-black transition-colors block py-0.5">
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavBarDropDownSection
