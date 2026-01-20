import { TrendingUp, AlertCircle, ShoppingCart, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Inflazione() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-orange-50 to-white">
                <div className="z-10 px-4 space-y-6 max-w-5xl mx-auto mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-semibold mb-4">
                        <TrendingUp className="w-4 h-4" />
                        Macroeconomia
                    </div>
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
                        Inflazione
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-500 font-medium tracking-tight max-w-3xl mx-auto leading-relaxed">
                        L'aumento generalizzato e continuativo dei prezzi.
                        <span className="block mt-2 text-gray-900">Quando il denaro perde valore.</span>
                    </p>
                </div>
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-200 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Definizione */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-8">Cos'è l'inflazione?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        L'<strong>inflazione</strong> è l'aumento generalizzato e continuativo dei prezzi di beni e servizi in un determinato periodo di tempo.
                        Quando c'è inflazione, il potere d'acquisto della moneta diminuisce: con la stessa quantità di denaro si possono comprare meno cose.
                    </p>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        L'inflazione viene misurata attraverso indici come l'<strong>IPC</strong> (Indice dei Prezzi al Consumo) che monitora
                        l'andamento dei prezzi di un paniere di beni e servizi rappresentativi.
                    </p>
                </div>
            </section>

            {/* Cause dell'Inflazione */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Cause principali</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Inflazione da domanda */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <ShoppingCart className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inflazione da domanda</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Si verifica quando la domanda di beni e servizi supera l'offerta disponibile.
                                I consumatori sono disposti a pagare di più, facendo salire i prezzi.
                            </p>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <span className="text-sm font-semibold text-blue-600">Domanda &gt; Offerta</span>
                            </div>
                        </div>

                        {/* Inflazione da costi */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                                <ArrowUpRight className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inflazione da costi</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Causata dall'aumento dei costi di produzione (materie prime, energia, salari).
                                Le imprese trasferiscono questi costi maggiori sui prezzi finali.
                            </p>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <span className="text-sm font-semibold text-orange-600">Costi produzione ↑</span>
                            </div>
                        </div>

                        {/* Inflazione monetaria */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                <Wallet className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inflazione monetaria</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Deriva da un'eccessiva quantità di moneta in circolazione rispetto ai beni disponibili.
                                Più denaro insegue gli stessi beni, facendo aumentare i prezzi.
                            </p>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <span className="text-sm font-semibold text-purple-600">Moneta in eccesso</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Effetti dell'Inflazione */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Effetti sull'economia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Effetti negativi */}
                        <div className="bg-red-50 rounded-3xl p-10 border border-red-100">
                            <div className="flex items-center gap-3 mb-6">
                                <ArrowDownRight className="w-8 h-8 text-red-600" />
                                <h3 className="text-2xl font-semibold text-gray-900">Effetti negativi</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                                    <div>
                                        <strong className="text-gray-900">Perdita di potere d'acquisto:</strong>
                                        <span className="text-gray-600"> I salari reali diminuiscono se non aumentano al passo con l'inflazione</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                                    <div>
                                        <strong className="text-gray-900">Incertezza economica:</strong>
                                        <span className="text-gray-600"> Difficoltà nella pianificazione finanziaria a lungo termine</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                                    <div>
                                        <strong className="text-gray-900">Penalizza i risparmiatori:</strong>
                                        <span className="text-gray-600"> Il valore reale dei risparmi diminuisce nel tempo</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                                    <div>
                                        <strong className="text-gray-900">Redistribuzione della ricchezza:</strong>
                                        <span className="text-gray-600"> Favorisce i debitori a scapito dei creditori</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Effetti positivi (moderati) */}
                        <div className="bg-green-50 rounded-3xl p-10 border border-green-100">
                            <div className="flex items-center gap-3 mb-6">
                                <ArrowUpRight className="w-8 h-8 text-green-600" />
                                <h3 className="text-2xl font-semibold text-gray-900">Inflazione moderata</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <div>
                                        <strong className="text-gray-900">Stimola i consumi:</strong>
                                        <span className="text-gray-600"> Le persone tendono a spendere prima che i prezzi aumentino ulteriormente</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <div>
                                        <strong className="text-gray-900">Favorisce gli investimenti:</strong>
                                        <span className="text-gray-600"> Le imprese sono incentivate a investire in attività produttive</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <div>
                                        <strong className="text-gray-900">Riduce il peso del debito:</strong>
                                        <span className="text-gray-600"> Il valore reale dei debiti diminuisce nel tempo</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <div>
                                        <strong className="text-gray-900">Segnale di crescita:</strong>
                                        <span className="text-gray-600"> Un'inflazione del 2% è considerata sana dalle banche centrali</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misurazione */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-8">Come si misura?</h2>
                    <div className="bg-white rounded-3xl p-10 shadow-sm">
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            L'inflazione viene misurata principalmente attraverso l'<strong>Indice dei Prezzi al Consumo (IPC)</strong>,
                            che monitora l'andamento dei prezzi di un paniere rappresentativo di beni e servizi.
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Formula del tasso di inflazione:</h3>
                            <div className="bg-white rounded-xl p-6 font-mono text-lg text-center border border-gray-200">
                                Tasso di inflazione = [(IPC anno corrente - IPC anno precedente) / IPC anno precedente] × 100
                            </div>
                            <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                <p className="text-gray-700">
                                    <strong>Esempio:</strong> Se l'IPC era 100 l'anno scorso e quest'anno è 103,
                                    il tasso di inflazione è: [(103-100)/100] × 100 = <strong className="text-blue-600">3%</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tipi di Inflazione */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Tipi di inflazione</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
                            <h3 className="text-2xl font-semibold text-green-900 mb-3">Strisciante</h3>
                            <p className="text-green-700 mb-4">1-3% annuo</p>
                            <p className="text-gray-600">Considerata sana e normale. Stimola l'economia senza creare instabilità.</p>
                        </div>
                        <div className="bg-orange-50 rounded-3xl p-8 border border-orange-200">
                            <h3 className="text-2xl font-semibold text-orange-900 mb-3">Galoppante</h3>
                            <p className="text-orange-700 mb-4">10-50% annuo</p>
                            <p className="text-gray-600">Preoccupante. Erode rapidamente il potere d'acquisto e crea instabilità economica.</p>
                        </div>
                        <div className="bg-red-50 rounded-3xl p-8 border border-red-200">
                            <h3 className="text-2xl font-semibold text-red-900 mb-3">Iperinflazione</h3>
                            <p className="text-red-700 mb-4">&gt;50% mensile</p>
                            <p className="text-gray-600">Catastrofica. Distrugge il valore della moneta e paralizza l'economia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Politiche anti-inflazione */}
            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight mb-8">Come si combatte?</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-10">
                        Le <strong>banche centrali</strong> (come la BCE in Europa o la Fed negli USA) utilizzano principalmente
                        la <strong>politica monetaria</strong> per controllare l'inflazione:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-semibold mb-4">Aumento dei tassi di interesse</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Rendendo il credito più costoso, si riduce la spesa e gli investimenti,
                                diminuendo la domanda aggregata e quindi la pressione sui prezzi.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-semibold mb-4">Riduzione della massa monetaria</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Limitando la quantità di denaro in circolazione attraverso operazioni di mercato aperto,
                                si riduce la capacità di spesa complessiva.
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