import { Code2, Layers, Palette, Zap, FileCode, Folder, Terminal, Sparkles } from "lucide-react";

export default function WorkInProgress() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-violet-50 to-white">
                <div className="z-10 px-4 space-y-6 max-w-5xl mx-auto mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-semibold mb-4">
                        <Code2 className="w-4 h-4" />
                        Dietro le quinte
                    </div>
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
                        Work in Progress
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-500 font-medium tracking-tight max-w-3xl mx-auto leading-relaxed">
                        Come è stato creato questo sito.
                        <span className="block mt-2 text-gray-900">Tecnologie, struttura e design.</span>
                    </p>
                </div>
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-violet-200 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Stack Tecnologico */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-8 text-center">Stack Tecnologico</h2>
                    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Questo sito è stato costruito utilizzando tecnologie moderne e performanti per garantire
                        un'esperienza utente fluida e un design accattivante.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Next.js */}
                        <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Next.js 16</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Framework React con Turbopack per performance eccezionali e routing automatico.
                            </p>
                            <div className="mt-4 px-3 py-1 bg-white/10 rounded-full text-xs font-medium inline-block">
                                Framework
                            </div>
                        </div>

                        {/* TypeScript */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6">
                                <FileCode className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">TypeScript</h3>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                Type safety e autocompletamento per un codice più robusto e manutenibile.
                            </p>
                            <div className="mt-4 px-3 py-1 bg-white/10 rounded-full text-xs font-medium inline-block">
                                Linguaggio
                            </div>
                        </div>

                        {/* Tailwind CSS */}
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6">
                                <Palette className="w-6 h-6 text-cyan-500" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Tailwind CSS</h3>
                            <p className="text-cyan-50 text-sm leading-relaxed">
                                Utility-first CSS per un design rapido, consistente e completamente personalizzabile.
                            </p>
                            <div className="mt-4 px-3 py-1 bg-white/10 rounded-full text-xs font-medium inline-block">
                                Styling
                            </div>
                        </div>

                        {/* Lucide Icons */}
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6">
                                <Sparkles className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Lucide React</h3>
                            <p className="text-orange-50 text-sm leading-relaxed">
                                Libreria di icone moderne e pulite, perfettamente integrate con React.
                            </p>
                            <div className="mt-4 px-3 py-1 bg-white/10 rounded-full text-xs font-medium inline-block">
                                Icons
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Struttura del Progetto */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Struttura del Progetto</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* File Structure */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Folder className="w-6 h-6 text-violet-600" />
                                <h3 className="text-2xl font-semibold text-gray-900">Organizzazione File</h3>
                            </div>
                            <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
                                <pre className="text-green-400">
                                    {`gestione-progetto/
├── app/
│   ├── inflazione/
│   │   └── page.tsx
│   ├── pil/
│   │   └── page.tsx
│   ├── domanda-offerta/
│   │   └── page.tsx
│   ├── bep/
│   │   └── page.tsx
│   ├── imposte-tasse/
│   │   └── page.tsx
│   ├── costi/
│   │   └── page.tsx
│   ├── work-in-progress/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── layout/
│       ├── navbar.tsx
│       ├── dropDown.tsx
│       ├── items.tsx
│       └── listItems.tsx
└── data/
    └── layout/
        └── navBarData.ts`}
                                </pre>
                            </div>
                            <p className="text-sm text-gray-600 mt-4">
                                Struttura modulare basata su <strong>App Router</strong> di Next.js 16,
                                con routing automatico basato su cartelle.
                            </p>
                        </div>

                        {/* Component Architecture */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Layers className="w-6 h-6 text-blue-600" />
                                <h3 className="text-2xl font-semibold text-gray-900">Architettura Componenti</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                                    <h4 className="font-semibold text-gray-900 mb-2">Layout Globale</h4>
                                    <p className="text-sm text-gray-600">
                                        <code className="bg-violet-100 px-2 py-1 rounded text-xs">layout.tsx</code> gestisce
                                        la struttura comune a tutte le pagine, includendo navbar e font.
                                    </p>
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                                    <h4 className="font-semibold text-gray-900 mb-2">Navbar Dinamica</h4>
                                    <p className="text-sm text-gray-600">
                                        Sistema di navigazione con dropdown animato, gestione dello stato con
                                        <code className="bg-blue-100 px-2 py-1 rounded text-xs ml-1">useState</code> e
                                        <code className="bg-blue-100 px-2 py-1 rounded text-xs ml-1">useRef</code>.
                                    </p>
                                </div>

                                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                                    <h4 className="font-semibold text-gray-900 mb-2">Pagine Tematiche</h4>
                                    <p className="text-sm text-gray-600">
                                        Ogni pagina è un componente React indipendente con contenuti educativi
                                        strutturati in sezioni semantiche.
                                    </p>
                                </div>

                                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                                    <h4 className="font-semibold text-gray-900 mb-2">Data Layer</h4>
                                    <p className="text-sm text-gray-600">
                                        Configurazione centralizzata in <code className="bg-orange-100 px-2 py-1 rounded text-xs">navBarData.ts</code>
                                        per gestire menu e routing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Codice Navbar */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-8 text-center">Esempio: Navbar Component</h2>
                    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        La navbar è il cuore della navigazione del sito. Ecco come è stata implementata:
                    </p>

                    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="bg-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-700">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-gray-400 text-sm font-mono">navbar.tsx</span>
                        </div>
                        <div className="bg-gray-900 p-6 overflow-x-auto">
                            <pre className="text-sm">
                                <code className="text-gray-300">
                                    {`"use client";

import { useState, useRef } from "react";
import NavBarDropDownSection from "./dropDown";
import NavBarListItems from "./listItems";

const LayoutNavBar = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
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

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
            <div className="max-w-[1024px] mx-auto px-4 h-[44px]">
                <NavBarListItems 
                    navItems={navItems} 
                    activeItem={activeItem} 
                    handleMouseEnter={handleMouseEnter} 
                />
            </div>
            <NavBarDropDownSection
                isDropdownVisible={isDropdownVisible}
                activeItem={activeItem}
                handleMouseLeave={handleMouseLeave}
            />
        </nav>
    );
};`}
                                </code>
                            </pre>
                        </div>
                    </div>


                </div>
            </section>

            {/* Design System */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Design System</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Colori */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Palette Colori</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 shadow-md" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Inflazione</p>
                                        <p className="text-sm text-gray-600">Orange → Red</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 shadow-md" />
                                    <div>
                                        <p className="font-semibold text-gray-900">PIL</p>
                                        <p className="text-sm text-gray-600">Indigo → Purple</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-md" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Domanda/Offerta</p>
                                        <p className="text-sm text-gray-600">Purple → Pink</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-md" />
                                    <div>
                                        <p className="font-semibold text-gray-900">BEP</p>
                                        <p className="text-sm text-gray-600">Emerald → Teal</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Typography */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tipografia</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-6xl font-semibold tracking-tighter text-gray-900 mb-2">Aa</p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Font:</strong> Poppins<br />
                                        <strong>Pesi:</strong> 400, 500, 600, 700, 800, 900
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-gray-200">
                                    <h4 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Heading 1</h4>
                                    <p className="text-xs text-gray-500 font-mono">text-6xl md:text-8xl font-semibold</p>
                                </div>
                                <div>
                                    <h5 className="text-2xl font-semibold text-gray-900 mb-2">Heading 2</h5>
                                    <p className="text-xs text-gray-500 font-mono">text-4xl font-semibold</p>
                                </div>
                                <div>
                                    <p className="text-xl text-gray-600 mb-2">Body Text</p>
                                    <p className="text-xs text-gray-500 font-mono">text-xl text-gray-600</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="py-12 px-6 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-medium">
                    <p>© 2026 EcoBase. Tutti i diritti riservati.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Supporto</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
