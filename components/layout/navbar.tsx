"use client";

import { useState, useRef } from "react";
import { Menu } from "lucide-react";
import NavBarDropDownSection from "./dropDown";
import NavBarListItems from "./listItems";
import NavBarTitle from "./title";
import RightSideNav from "./rightSideNav";
import MobileMenu from "./mobileMenu";

import { navData } from "@/data/layout/navBarData";
import { navItems } from "@/data/layout/navBarData";

const LayoutNavBar = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (item: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveItem(item);
        setIsDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownVisible(false);
            setActiveItem(null);
        }, 150);
    };

    const currentDropdownData = activeItem && navData[activeItem]
        ? navData[activeItem]
        : (activeItem ? navData.default : []);

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-100"
                onMouseLeave={handleMouseLeave}
            >
                <div className="relative z-50 max-w-[1024px] mx-auto px-4 h-[44px] flex items-center justify-between text-xs font-normal text-gray-900">
                    <NavBarTitle />

                    {/* Desktop Navigation - Hidden on mobile */}
                    <div className="hidden md:contents">
                        <NavBarListItems navItems={navItems} activeItem={activeItem} handleMouseEnter={handleMouseEnter} />
                        <RightSideNav />
                    </div>

                    {/* Mobile Menu Button - Visible only on mobile */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Apri menu"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>

                {/* Desktop Dropdown - Hidden on mobile */}
                <div className="hidden md:block">
                    <NavBarDropDownSection
                        isDropdownVisible={isDropdownVisible}
                        activeItem={activeItem}
                        onMouseEnter={() => {
                            if (timeoutRef.current) clearTimeout(timeoutRef.current);
                            setIsDropdownVisible(true);
                        }}
                        handleMouseLeave={handleMouseLeave}
                        currentDropdownData={currentDropdownData}
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default LayoutNavBar;
