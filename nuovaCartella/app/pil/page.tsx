import { BarChart3, TrendingUp, Users, Factory, Building2, Landmark, ArrowUpRight, Calculator } from "lucide-react";

export default function PIL() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
                <div className="z-10 px-4 space-y-6 max-w-5xl mx-auto mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-semibold mb-4">
                        <BarChart3 className="w-4 h-4" />
                        Macroeconomia
                    </div>
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
                        PIL
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-500 font-medium tracking-tight max-w-3xl mx-auto leading-relaxed">
                        Prodotto Interno Lordo.
                        <span className="block mt-2 text-gray-900">La misura della ricchezza di un Paese.</span>
                    </p>
                </div>
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Definizione */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-8">Cos'è il PIL?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        Il <strong>Prodotto Interno Lordo (PIL)</strong> è il valore totale di tutti i beni e servizi finali
                        prodotti all'interno di un Paese in un determinato periodo di tempo, generalmente un anno.
                    </p>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        È l'indicatore principale per misurare la <strong>ricchezza economica</strong> e il <strong>benessere</strong> di una nazione.
                        Un PIL in crescita indica un'economia in espansione, mentre un PIL in calo segnala una recessione.
                    </p>
                    <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100 mt-8">
                        <p className="text-lg text-gray-700">
                            <strong>Importante:</strong> Il PIL misura solo i beni e servizi <em>finali</em>,
                            per evitare di contare più volte gli stessi prodotti (doppia contabilizzazione).
                        </p>
                    </div>
                </div>
            </section>

            {/* Metodi di calcolo */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Tre metodi per calcolarlo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Metodo della spesa */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <Calculator className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Metodo della spesa</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Somma di tutte le spese effettuate nell'economia:
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm mb-4">
                                PIL = C + I + G + (X - M)
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><strong>C</strong> = Consumi privati</li>
                                <li><strong>I</strong> = Investimenti</li>
                                <li><strong>G</strong> = Spesa pubblica</li>
                                <li><strong>X-M</strong> = Esportazioni nette</li>
                            </ul>
                        </div>

                        {/* Metodo del reddito */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Metodo del reddito</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Somma di tutti i redditi generati nella produzione:
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <span>Salari e stipendi</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <span>Profitti delle imprese</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <span>Rendite</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <span>Interessi</span>
                                </li>
                            </ul>
                        </div>

                        {/* Metodo della produzione */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                <Factory className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Metodo della produzione</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Somma del valore aggiunto in ogni fase produttiva:
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                                    <span>Agricoltura</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                                    <span>Industria</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                                    <span>Servizi</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* PIL nominale vs reale */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">PIL Nominale vs PIL Reale</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* PIL Nominale */}
                        <div className="bg-orange-50 rounded-3xl p-10 border border-orange-100">
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">PIL Nominale</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Calcolato ai <strong>prezzi correnti</strong> dell'anno di riferimento.
                                Include l'effetto dell'inflazione.
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-orange-200">
                                <p className="text-sm text-gray-600 mb-2">Esempio:</p>
                                <p className="text-gray-800">
                                    Se nel 2024 produci 100 unità a 10€ ciascuna, il PIL nominale è <strong>1.000€</strong>.
                                    Nel 2025, se produci sempre 100 unità ma a 12€ (inflazione), il PIL nominale è <strong>1.200€</strong>.
                                </p>
                            </div>
                            <div className="mt-6 p-4 bg-orange-100 rounded-xl">
                                <p className="text-sm text-orange-800">
                                    ⚠️ Non riflette la crescita reale della produzione
                                </p>
                            </div>
                        </div>

                        {/* PIL Reale */}
                        <div className="bg-green-50 rounded-3xl p-10 border border-green-100">
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">PIL Reale</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Calcolato ai <strong>prezzi costanti</strong> di un anno base.
                                Elimina l'effetto dell'inflazione.
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-green-200">
                                <p className="text-sm text-gray-600 mb-2">Esempio:</p>
                                <p className="text-gray-800">
                                    Usando i prezzi del 2024 (10€) come base, nel 2025 il PIL reale rimane <strong>1.000€</strong>
                                    (100 unità × 10€), mostrando che la produzione non è aumentata.
                                </p>
                            </div>
                            <div className="mt-6 p-4 bg-green-100 rounded-xl">
                                <p className="text-sm text-green-800">
                                    ✓ Misura accurata della crescita economica reale
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PIL pro capite */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-8">PIL pro capite</h2>
                    <div className="bg-white rounded-3xl p-10 shadow-sm">
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Il <strong>PIL pro capite</strong> è il PIL totale diviso per il numero di abitanti.
                            Fornisce un'indicazione del <strong>tenore di vita medio</strong> della popolazione.
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Formula:</h3>
                            <div className="bg-white rounded-xl p-6 font-mono text-lg text-center border border-gray-200">
                                PIL pro capite = PIL totale / Popolazione
                            </div>
                            <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                <p className="text-gray-700">
                                    <strong>Esempio:</strong> Se l'Italia ha un PIL di 2.000 miliardi di euro e 60 milioni di abitanti,
                                    il PIL pro capite è: 2.000.000.000.000 / 60.000.000 = <strong className="text-blue-600">~33.333€</strong>
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
                            <p className="text-gray-700">
                                <strong>Nota:</strong> Il PIL pro capite è una media e non riflette la distribuzione della ricchezza.
                                Un Paese può avere un PIL pro capite alto ma grandi disuguaglianze.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Componenti del PIL */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Le componenti del PIL</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Consumi (C)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Spesa delle famiglie per beni e servizi. Rappresenta circa il 60-70% del PIL.
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
                            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Investimenti (I)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Spesa delle imprese in macchinari, edifici e scorte. Circa 15-20% del PIL.
                            </p>
                        </div>

                        <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100">
                            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-4">
                                <Landmark className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Spesa Pubblica (G)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Spesa dello Stato per servizi pubblici, infrastrutture, stipendi. Circa 15-25% del PIL.
                            </p>
                        </div>

                        <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
                            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-4">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Esportazioni nette (X-M)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Differenza tra esportazioni e importazioni. Può essere positiva o negativa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Limiti del PIL */}
            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight mb-8">I limiti del PIL</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-10">
                        Nonostante sia l'indicatore più usato, il PIL ha dei <strong>limiti importanti</strong>:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-xl font-semibold mb-4">Non misura il benessere</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Non considera qualità della vita, salute, istruzione, tempo libero o felicità.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-xl font-semibold mb-4">Ignora le disuguaglianze</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Un PIL alto può nascondere grandi disparità di reddito tra ricchi e poveri.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-xl font-semibold mb-4">Esclude l'economia sommersa</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Lavoro nero, baratto e attività non dichiarate non vengono conteggiati.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-xl font-semibold mb-4">Non valuta la sostenibilità</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Non tiene conto dei danni ambientali o dell'esaurimento delle risorse naturali.
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
                        <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Supporto</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
