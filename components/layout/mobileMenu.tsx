"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { navData, navItems } from "@/data/layout/navBarData";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleExpand = (item: string) => {
        setExpandedItem(expandedItem === item ? null : item);
    };

    // Funzione per convertire il nome in URL valido (stessa logica del dropdown desktop)
    const convertToUrl = (link: string): string => {
        let urlPath = link
            .toLowerCase()
            .replace(/\s*\(.*?\)\s*/g, '') // Rimuovi contenuto tra parentesi
            .replace(/\s*&\s*/g, '-') // Sostituisci & con -
            .replace(/\s+/g, '-') // Sostituisci spazi con -
            .replace(/[^\w-]/g, ''); // Rimuovi caratteri speciali

        if (urlPath === "imposte-e-tasse") {
            urlPath = "imposte-tasse";
        }
        if (urlPath === "imposte-dirette") {
            urlPath = "imposte-tasse#imposte-dirette";
        }
        if (urlPath === "imposte-indirette") {
            urlPath = "imposte-tasse#imposte-indirette";
        }
        if (urlPath === "tutti-i-temi") {
            urlPath = "#features";
        }

        return "/" + urlPath;
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    } overflow-y-auto`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Chiudi menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="p-4">
                    {navItems.map((item) => (
                        <div key={item} className="mb-2">
                            <button
                                onClick={() => toggleExpand(item)}
                                className="w-full flex items-center justify-between p-3 text-left text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <span className="font-medium">{item}</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${expandedItem === item ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Dropdown Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${expandedItem === item ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="pl-4 pt-2 pb-2">
                                    {navData[item]?.map((section, idx) => (
                                        <div key={idx} className="mb-4">
                                            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                                                {section.title}
                                            </h3>
                                            <ul className="space-y-1">
                                                {section.items.map((subItem, subIdx) => (
                                                    <li key={subIdx}>
                                                        <a
                                                            href={convertToUrl(subItem)}
                                                            className="block p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                                                            onClick={onClose}
                                                        >
                                                            {subItem}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Esplora Section */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                            Esplora
                        </h3>
                        {navData.default?.map((section, idx) => (
                            <div key={idx} className="mb-4">
                                <ul className="space-y-1">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <a
                                                href={convertToUrl(item)}
                                                className="block p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                                                onClick={onClose}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
