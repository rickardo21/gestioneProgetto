import { Wallet, TrendingDown, Package, Zap, Users, Calculator, ArrowRight, AlertCircle } from "lucide-react";

export default function Costi() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-amber-50 to-white">
                <div className="z-10 px-4 space-y-6 max-w-5xl mx-auto mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">
                        <Wallet className="w-4 h-4" />
                        Business
                    </div>
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
                        Costi e Spese
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-500 font-medium tracking-tight max-w-3xl mx-auto leading-relaxed">
                        La gestione delle uscite aziendali.
                        <span className="block mt-2 text-gray-900">Fissi, variabili e tutto il resto.</span>
                    </p>
                </div>
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-200 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Definizione */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-8">Cosa sono i costi?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        I <strong>costi</strong> rappresentano il valore delle risorse consumate da un'impresa per produrre beni o servizi.
                        Sono essenziali per calcolare il <strong>profitto</strong> e prendere decisioni strategiche.
                    </p>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        La formula fondamentale è:
                    </p>
                    <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
                        <div className="font-mono text-3xl text-center text-gray-900 mb-4">
                            Profitto = Ricavi - Costi
                        </div>
                        <p className="text-center text-gray-600">
                            Per massimizzare il profitto, un'impresa deve aumentare i ricavi e/o ridurre i costi.
                        </p>
                    </div>
                </div>
            </section>

            {/* Differenza Costi vs Spese */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Costi vs Spese</h2>
                    <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        Spesso usati come sinonimi, ma in contabilità hanno significati diversi:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl p-10 shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <Package className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Costi</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Risorse consumate <strong>direttamente</strong> per la produzione di beni o servizi.
                                Sono legati all'attività produttiva.
                            </p>
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                <h4 className="font-semibold text-gray-900 mb-3">Esempi:</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Materie prime per produrre</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Manodopera diretta</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Energia per i macchinari</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Ammortamento attrezzature</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow-sm">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                                <Wallet className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Spese</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Uscite di denaro <strong>non direttamente</strong> legate alla produzione.
                                Sono costi di gestione e amministrazione.
                            </p>
                            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                                <h4 className="font-semibold text-gray-900 mb-3">Esempi:</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Spese di marketing e pubblicità</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Stipendi amministrativi</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Affitto uffici</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Consulenze legali e fiscali</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Classificazione dei costi */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Classificazione dei costi</h2>
                    <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        I costi possono essere classificati in diversi modi. La distinzione più importante è tra costi fissi e variabili:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Costi Fissi */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                                    <Package className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-semibold text-gray-900">Costi Fissi</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Costi che <strong>non variano</strong> al variare della quantità prodotta.
                                Rimangono costanti nel breve periodo.
                            </p>

                            <div className="bg-white rounded-2xl p-6 border border-blue-200 mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Caratteristiche:</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5" />
                                        <span>Indipendenti dal volume di produzione</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5" />
                                        <span>Devono essere pagati anche se non si produce</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5" />
                                        <span>Costo fisso unitario diminuisce all'aumentare della produzione</span>
                                    </li>
                                </ul>
                            </div>

                            <h4 className="font-semibold text-gray-900 mb-3">Esempi:</h4>
                            <div className="space-y-2">
                                <div className="bg-white rounded-xl p-4 border border-blue-200">
                                    <p className="text-sm text-gray-700">🏢 <strong>Affitto:</strong> 2.000€/mese (sempre uguale)</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 border border-blue-200">
                                    <p className="text-sm text-gray-700">👥 <strong>Stipendi fissi:</strong> 5.000€/mese</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 border border-blue-200">
                                    <p className="text-sm text-gray-700">🛡️ <strong>Assicurazioni:</strong> 500€/mese</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 border border-blue-200">
                                    <p className="text-sm text-gray-700">🔧 <strong>Ammortamenti:</strong> 1.000€/mese</p>
                                </div>
                            </div>
                        </div>

                        {/* Costi Variabili */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 border border-orange-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                                    <TrendingDown className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-semibold text-gray-900">Costi Variabili</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Costi che <strong>variano proporzionalmente</strong> alla quantità prodotta.
                                Più produci, più aumentano.
                            </p>

                            <div className="bg-white rounded-2xl p-6 border border-orange-200 mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Caratteristiche:</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5" />
                                        <span>Dipendenti dal volume di produzione</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5" />
                                        <span>Se non si produce, sono zero</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5" />
                                        <span>Costo variabile unitario rimane costante</span>
                                    </li>
                                </ul>
                            </div>

                            <h4 className="font-semibold text-gray-900 mb-3">Esempi:</h4>
                            <div className="space-y-2">
                                <div className="bg-white rounded-xl p-4 border border-orange-200">
                                    <p className="text-sm text-gray-700">📦 <strong>Materie prime:</strong> 10€ per unità prodotta</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 border border-orange-200">
                                    <p className="text-sm text-gray-700">⚡ <strong>Energia produzione:</strong> 2€ per unità</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 border border-orange-200">
                                    <p className="text-sm text-gray-700">📦 <strong>Imballaggi:</strong> 1€ per unità</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 border border-orange-200">
                                    <p className="text-sm text-gray-700">🚚 <strong>Trasporti:</strong> 3€ per unità</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Costi Totali */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border border-purple-100">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Costi Totali</h3>
                        <div className="bg-white rounded-2xl p-8 border border-purple-200">
                            <div className="font-mono text-3xl text-center text-gray-900 mb-6">
                                CT = CF + CV
                            </div>
                            <p className="text-center text-gray-600 mb-8">
                                Costo Totale = Costi Fissi + Costi Variabili
                            </p>

                            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                                <h4 className="font-semibold text-gray-900 mb-4">Esempio pratico:</h4>
                                <div className="space-y-3 text-gray-700">
                                    <p>• Costi Fissi mensili: <strong>8.500€</strong> (affitto + stipendi + assicurazioni + ammortamenti)</p>
                                    <p>• Costo Variabile unitario: <strong>16€</strong> (materie prime + energia + imballaggi + trasporti)</p>
                                    <p>• Produzione mensile: <strong>1.000 unità</strong></p>
                                    <div className="mt-4 p-4 bg-white rounded-lg border border-purple-300">
                                        <p className="mb-2">Costi Variabili totali = 1.000 × 16€ = <strong>16.000€</strong></p>
                                        <p className="mb-2">Costi Fissi = <strong>8.500€</strong></p>
                                        <p className="text-lg font-semibold text-purple-900">
                                            Costi Totali = 8.500€ + 16.000€ = <strong className="text-2xl">24.500€</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Altre classificazioni */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Altre classificazioni dei costi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Costi diretti */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Costi Diretti</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Costi che possono essere <strong>attribuiti direttamente</strong> a un prodotto specifico.
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-xs text-gray-600">
                                    <strong>Es:</strong> Legno per un tavolo, tessuto per una maglietta
                                </p>
                            </div>
                        </div>

                        {/* Costi indiretti */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Costi Indiretti</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Costi che <strong>non possono essere attribuiti</strong> a un singolo prodotto. Vanno ripartiti.
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-xs text-gray-600">
                                    <strong>Es:</strong> Affitto dello stabilimento, stipendio del direttore
                                </p>
                            </div>
                        </div>

                        {/* Costi opportunità */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Costi Opportunità</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Il <strong>valore della migliore alternativa</strong> a cui si rinuncia scegliendo un'opzione.
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-xs text-gray-600">
                                    <strong>Es:</strong> Usare un locale di proprietà invece di affittarlo
                                </p>
                            </div>
                        </div>

                        {/* Costi sommersi */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Costi Sommersi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Costi già sostenuti che <strong>non possono essere recuperati</strong>. Non influenzano decisioni future.
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-xs text-gray-600">
                                    <strong>Es:</strong> Investimento in un macchinario già acquistato
                                </p>
                            </div>
                        </div>

                        {/* Costi marginali */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Costi Marginali</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Il costo di <strong>produrre un'unità aggiuntiva</strong>. Fondamentale per decisioni di produzione.
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-xs text-gray-600">
                                    <strong>Formula:</strong> ΔCT / ΔQ (variazione costo totale / variazione quantità)
                                </p>
                            </div>
                        </div>

                        {/* Costi medi */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Costi Medi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Il <strong>costo per unità prodotta</strong>. Si calcola dividendo il costo totale per la quantità.
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-xs text-gray-600">
                                    <strong>Formula:</strong> Costo Medio = CT / Q
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gestione dei costi */}
            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight mb-8">Come ridurre i costi?</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-10">
                        Strategie per <strong>ottimizzare i costi</strong> e aumentare la redditività:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Calculator className="w-6 h-6 text-emerald-400" />
                                <h3 className="text-xl font-semibold">Economie di scala</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                Aumentare la produzione per ridurre il costo fisso unitario. Più produci, meno costa ogni unità.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="w-6 h-6 text-blue-400" />
                                <h3 className="text-xl font-semibold">Negoziazione fornitori</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                Ottenere prezzi migliori dalle materie prime attraverso contratti a lungo termine o acquisti in volume.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="w-6 h-6 text-yellow-400" />
                                <h3 className="text-xl font-semibold">Automazione</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                Investire in tecnologia per ridurre i costi di manodopera e aumentare l'efficienza produttiva.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertCircle className="w-6 h-6 text-red-400" />
                                <h3 className="text-xl font-semibold">Eliminare sprechi</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                Identificare e rimuovere inefficienze: scarti, tempi morti, processi ridondanti, scorte eccessive.
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
