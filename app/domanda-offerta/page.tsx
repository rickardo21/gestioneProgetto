import Footer from "@/components/layout/footer";
import { TrendingUp, TrendingDown, Target, ArrowRight, Activity, ShoppingBag } from "lucide-react";

export default function DomandaOfferta() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden bg-linear-to-b from-purple-50 to-white">
                <div className="z-10 px-4 space-y-6 max-w-5xl mx-auto mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-4">
                        <ShoppingBag className="w-4 h-4" />
                        Mercato
                    </div>
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
                        Domanda e Offerta
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-500 font-medium tracking-tight max-w-3xl mx-auto leading-relaxed">
                        Le forze che determinano i prezzi.
                        <span className="block mt-2 text-gray-900">L'equilibrio del mercato.</span>
                    </p>
                </div>
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Definizione */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-8">Le leggi fondamentali del mercato</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        <strong>Domanda</strong> e <strong>Offerta</strong> sono le due forze fondamentali che determinano
                        i prezzi e le quantità scambiate in un mercato. La loro interazione crea l'<strong>equilibrio di mercato</strong>.
                    </p>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Comprendere questi meccanismi è essenziale per capire come funziona l'economia e perché i prezzi cambiano.
                    </p>
                </div>
            </section>

            {/* Domanda e Offerta - Cards */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Domanda */}
                        <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <TrendingDown className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Domanda</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                La <strong>domanda</strong> rappresenta la quantità di un bene o servizio che i consumatori
                                sono disposti e in grado di acquistare a diversi livelli di prezzo.
                            </p>

                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Legge della domanda:</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    All'aumentare del prezzo, la quantità domandata <strong>diminuisce</strong>.
                                    Al diminuire del prezzo, la quantità domandata <strong>aumenta</strong>.
                                </p>
                                <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
                                    <p className="text-xs text-gray-600">Relazione inversa: Prezzo ↑ → Quantità ↓</p>
                                </div>
                            </div>

                            <h4 className="font-semibold text-gray-900 mb-3">Fattori che influenzano la domanda:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                    <span><strong>Reddito:</strong> Più reddito = più domanda</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                    <span><strong>Gusti e preferenze:</strong> Tendenze e mode</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                    <span><strong>Prezzo beni sostituti:</strong> Alternative disponibili</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                    <span><strong>Aspettative future:</strong> Previsioni sui prezzi</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                    <span><strong>Numero di consumatori:</strong> Dimensione del mercato</span>
                                </li>
                            </ul>
                        </div>

                        {/* Offerta */}
                        <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Offerta</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                L'<strong>offerta</strong> rappresenta la quantità di un bene o servizio che i produttori
                                sono disposti e in grado di vendere a diversi livelli di prezzo.
                            </p>

                            <div className="bg-green-50 rounded-2xl p-6 border border-green-100 mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Legge dell'offerta:</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    All'aumentare del prezzo, la quantità offerta <strong>aumenta</strong>.
                                    Al diminuire del prezzo, la quantità offerta <strong>diminuisce</strong>.
                                </p>
                                <div className="mt-4 p-3 bg-white rounded-lg border border-green-200">
                                    <p className="text-xs text-gray-600">Relazione diretta: Prezzo ↑ → Quantità ↑</p>
                                </div>
                            </div>

                            <h4 className="font-semibold text-gray-900 mb-3">Fattori che influenzano l'offerta:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <span><strong>Costi di produzione:</strong> Materie prime, energia, lavoro</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <span><strong>Tecnologia:</strong> Innovazioni che riducono i costi</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <span><strong>Prezzi beni correlati:</strong> Prodotti alternativi</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <span><strong>Aspettative future:</strong> Previsioni di mercato</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                    <span><strong>Numero di produttori:</strong> Concorrenza nel settore</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Punto di Equilibrio */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-4">
                            <Target className="w-4 h-4" />
                            Concetto chiave
                        </div>
                        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">Punto di Equilibrio</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Il punto in cui domanda e offerta si incontrano, determinando il <strong>prezzo di equilibrio</strong>
                            e la <strong>quantità di equilibrio</strong>.
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border border-purple-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Al punto di equilibrio:</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                                        <span>Quantità domandata = Quantità offerta</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                                        <span>Non c'è eccesso di domanda né di offerta</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                                        <span>Il mercato è in equilibrio stabile</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                                        <span>Nessuna pressione al cambiamento</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Esempio pratico:</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p className="text-sm">
                                        <strong>Prodotto:</strong> Smartphone
                                    </p>
                                    <p className="text-sm">
                                        <strong>Prezzo di equilibrio:</strong> 500€
                                    </p>
                                    <p className="text-sm">
                                        <strong>Quantità di equilibrio:</strong> 10.000 unità
                                    </p>
                                    <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                        <p className="text-xs text-gray-600">
                                            A 500€, i consumatori vogliono comprare esattamente 10.000 smartphone,
                                            e i produttori vogliono venderne esattamente 10.000.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Grafico concettuale */}
                        <div className="bg-white rounded-2xl p-8 border border-purple-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Rappresentazione grafica</h3>
                            <div className="relative h-80 flex items-center justify-center">
                                <svg viewBox="0 0 400 300" className="w-full h-full max-w-lg">
                                    {/* Assi */}
                                    <line x1="40" y1="260" x2="40" y2="20" stroke="#9CA3AF" strokeWidth="2" />
                                    <line x1="40" y1="260" x2="380" y2="260" stroke="#9CA3AF" strokeWidth="2" />

                                    {/* Frecce assi */}
                                    <polygon points="40,15 35,25 45,25" fill="#9CA3AF" />
                                    <polygon points="385,260 375,255 375,265" fill="#9CA3AF" />

                                    {/* Etichette assi */}
                                    <text x="15" y="25" fontSize="14" fill="#6B7280" fontWeight="600">Prezzo</text>
                                    <text x="340" y="285" fontSize="14" fill="#6B7280" fontWeight="600">Quantità</text>

                                    {/* Curva di Domanda (decrescente) - linea blu */}
                                    <path
                                        d="M 80,60 Q 150,100 220,140 T 360,220"
                                        stroke="#3B82F6"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                    />

                                    {/* Curva di Offerta (crescente) - linea verde */}
                                    <path
                                        d="M 80,220 Q 150,180 220,140 T 360,60"
                                        stroke="#10B981"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                    />

                                    {/* Punto di equilibrio */}
                                    <circle cx="220" cy="140" r="6" fill="#9333EA" stroke="white" strokeWidth="3" />

                                    {/* Linee tratteggiate dal punto di equilibrio agli assi */}
                                    <line x1="220" y1="140" x2="220" y2="260" stroke="#9333EA" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
                                    <line x1="220" y1="140" x2="40" y2="140" stroke="#9333EA" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />

                                    {/* Etichette curve */}
                                    <text x="340" y="230" fontSize="16" fill="#3B82F6" fontWeight="600">Domanda</text>
                                    <text x="340" y="75" fontSize="16" fill="#10B981" fontWeight="600">Offerta</text>

                                    {/* Etichetta punto di equilibrio */}
                                    <text x="230" y="135" fontSize="14" fill="#9333EA" fontWeight="700">E</text>

                                    {/* Etichette assi al punto di equilibrio */}
                                    <text x="10" y="145" fontSize="12" fill="#9333EA" fontWeight="600">P*</text>
                                    <text x="215" y="280" fontSize="12" fill="#9333EA" fontWeight="600">Q*</text>
                                </svg>
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                Le curve di domanda e offerta si intersecano nel punto di equilibrio (E), dove P* è il prezzo di equilibrio e Q* è la quantità di equilibrio
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Squilibri di mercato */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Cosa succede fuori dall'equilibrio?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Eccesso di offerta */}
                        <div className="bg-white rounded-3xl p-10 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                                    <TrendingDown className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">Eccesso di Offerta</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Quando il <strong>prezzo è troppo alto</strong>, la quantità offerta supera la quantità domandata.
                            </p>
                            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 mb-6">
                                <p className="text-sm text-gray-700 mb-3">
                                    <strong>Conseguenze:</strong>
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5" />
                                        <span>Accumulo di scorte invendute</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5" />
                                        <span>Pressione al ribasso sui prezzi</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5" />
                                        <span>Produttori riducono la produzione</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="text-sm text-gray-600">
                                    <strong>Esempio:</strong> Negozi pieni di giacche invernali a marzo → saldi per svuotare il magazzino
                                </p>
                            </div>
                        </div>

                        {/* Eccesso di domanda */}
                        <div className="bg-white rounded-3xl p-10 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">Eccesso di Domanda</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Quando il <strong>prezzo è troppo basso</strong>, la quantità domandata supera la quantità offerta.
                            </p>
                            <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-6">
                                <p className="text-sm text-gray-700 mb-3">
                                    <strong>Conseguenze:</strong>
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-red-500 mt-0.5" />
                                        <span>Carenza di prodotti (shortage)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-red-500 mt-0.5" />
                                        <span>Pressione al rialzo sui prezzi</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-red-500 mt-0.5" />
                                        <span>Produttori aumentano la produzione</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="text-sm text-gray-600">
                                    <strong>Esempio:</strong> Nuova console di gioco in uscita → code nei negozi, prezzi gonfiati dai rivenditori
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elasticità */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-8">Elasticità della domanda</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        L'<strong>elasticità</strong> misura quanto la quantità domandata reagisce a variazioni di prezzo.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Domanda elastica</h3>
                            <p className="text-gray-600 mb-4">
                                Piccole variazioni di prezzo causano <strong>grandi variazioni</strong> nella quantità domandata.
                            </p>
                            <div className="bg-white rounded-xl p-4 border border-blue-200">
                                <p className="text-sm text-gray-700">
                                    <strong>Esempi:</strong> Beni di lusso, prodotti con molti sostituti (es. marche di pasta)
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Domanda anelastica</h3>
                            <p className="text-gray-600 mb-4">
                                Variazioni di prezzo causano <strong>piccole variazioni</strong> nella quantità domandata.
                            </p>
                            <div className="bg-white rounded-xl p-4 border border-green-200">
                                <p className="text-sm text-gray-700">
                                    <strong>Esempi:</strong> Beni di prima necessità (pane, medicine, benzina)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
