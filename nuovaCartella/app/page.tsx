import { ArrowRight, ChevronRight, TrendingUp, Building2, Scale } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="z-10 px-4 space-y-8 max-w-5xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
                        EcoBase
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-500 font-medium tracking-tight max-w-2xl mx-auto leading-relaxed">
                        La tua base per la gestione finanziaria.
                        <span className="block mt-2 text-gray-900">Semplice. Intelligente. Tua.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">

                        <button className="text-[#0071e3] hover:text-[#0077ed] hover:underline px-6 py-3.5 rounded-full text-base font-medium transition-colors flex items-center gap-1">
                            Scopri di più <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>


                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white opacity-80 pointer-events-none" />
            </section>


            <section id="features" className="bg-[#f5f5f7] py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-20 space-y-4">
                        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Tutto quello che ti serve.</h2>
                        <p className="text-xl leading-8 text-gray-500 font-medium">
                            Dal macro al micro. Gestisci ogni aspetto della tua economia personale e aziendale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="col-span-1 md:col-span-2 row-span-2 bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <TrendingUp className="w-80 h-80 -mr-20 -mt-20 text-gray-900" />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <span className="text-gray-500 font-semibold tracking-wide uppercase text-xs mb-2 block">Analisi Globale</span>
                                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">Macroeconomia</h3>
                                    <p className="text-gray-500 text-lg max-w-xs">Indicatori globali e tendenze di mercato per capire dove va il mondo.</p>
                                    <ul className="mt-8 space-y-3 text-gray-600 font-medium">
                                        <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500" />Inflazione</li>
                                        <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-indigo-500" />PIL (Prodotto Interno Lordo)</li>
                                        <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-purple-500" />Domanda & Offerta</li>
                                    </ul>
                                </div>
                                <div className="mt-12 flex items-center justify-end border-t pt-6 border-gray-100">
                                    <span className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors cursor-pointer group-hover:bg-[#0071e3] group-hover:text-white">
                                        <ArrowRight className="w-5 h-5" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Azienda Card */}
                        <div className="col-span-1 md:col-span-2 bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <Building2 className="w-40 h-40 -mr-10 -mt-10 text-gray-900" />
                            </div>
                            <span className="text-gray-500 font-semibold tracking-wide uppercase text-xs mb-2 block">Business</span>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Azienda</h3>
                            <p className="text-gray-500">Gestione imprenditoriale avanzata e controllo costi.</p>
                            <div className="mt-6 flex gap-2 flex-wrap relative z-10">
                                <span className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-600">BEP</span>
                                <span className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-600">Costi</span>
                                <span className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-600">Ricavi</span>
                            </div>
                        </div>

                        {/* Fisco Card */}
                        <div className="col-span-1 md:col-span-2 bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute bottom-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <Scale className="w-32 h-32 text-gray-900" />
                            </div>
                            <span className="text-gray-500 font-semibold tracking-wide uppercase text-xs mb-2 block">Legale</span>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Fisco</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Tieni traccia di imposte dirette e indirette. Non perderti tra le scadenze.
                            </p>
                        </div>


                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-medium">
                    <p>© 2026 EcoBase. Tutti i diritti riservati.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Termini di Servizio</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Supporto</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
