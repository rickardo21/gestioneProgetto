import Footer from "@/components/layout/footer";
import { Wallet, Target, TrendingUp, AlertTriangle, CheckCircle, Package } from "lucide-react";

export default function BEP() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden bg-linear-to-b from-emerald-50 to-white">
                <div className="z-10 px-4 space-y-6 max-w-5xl mx-auto mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">
                        <Wallet className="w-4 h-4" />
                        Analisi
                    </div>
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
                        BEP
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-500 font-medium tracking-tight max-w-3xl mx-auto leading-relaxed">
                        Break Even Point.
                        <span className="block mt-2 text-gray-900">Il punto di pareggio della tua impresa.</span>
                    </p>
                </div>
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-200 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Definizione */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-8">Cos'è il Break Even Point?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        Il <strong>Break Even Point (BEP)</strong> o <strong>punto di pareggio</strong> è il livello di produzione e vendita
                        in cui i <strong>ricavi totali</strong> eguagliano i <strong>costi totali</strong>.
                    </p>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        In questo punto, l'impresa <strong>non guadagna né perde</strong>: il profitto è zero.
                        È un indicatore fondamentale per capire quante unità bisogna vendere per coprire tutti i costi.
                    </p>
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 mt-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="w-6 h-6 text-emerald-600" />
                            <h3 className="text-xl font-semibold text-gray-900">Perché è importante?</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                                <span>Aiuta a fissare obiettivi di vendita realistici</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                                <span>Permette di valutare la fattibilità di un progetto</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                                <span>Supporta le decisioni sui prezzi di vendita</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                                <span>Identifica il margine di sicurezza dell'impresa</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Costi Fissi vs Variabili */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Costi Fissi e Costi Variabili</h2>
                    <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        Per calcolare il BEP, è fondamentale distinguere tra questi due tipi di costi:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Costi Fissi */}
                        <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <Package className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Costi Fissi (CF)</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Costi che <strong>non variano</strong> al variare della quantità prodotta.
                                Devono essere sostenuti anche se la produzione è zero.
                            </p>

                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Esempi di costi fissi:</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Affitto del locale o capannone</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Stipendi fissi dei dipendenti</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Assicurazioni</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Ammortamenti macchinari</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Utenze base (luce, gas, internet)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="text-sm text-gray-600">
                                    <strong>Caratteristica:</strong> Rimangono costanti indipendentemente dal volume di produzione
                                </p>
                            </div>
                        </div>

                        {/* Costi Variabili */}
                        <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Costi Variabili (CV)</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Costi che <strong>variano proporzionalmente</strong> alla quantità prodotta.
                                Più si produce, più aumentano questi costi.
                            </p>

                            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Esempi di costi variabili:</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Materie prime</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Energia elettrica per la produzione</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Manodopera diretta (pagata a cottimo)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Imballaggi e packaging</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Trasporti e logistica</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="text-sm text-gray-600">
                                    <strong>Caratteristica:</strong> Aumentano all'aumentare della produzione
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Costo Totale */}
                    <div className="mt-8 bg-white rounded-3xl p-10 shadow-sm">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Costo Totale (CT)</h3>
                        <p className="text-center text-gray-600 mb-6">
                            La somma di costi fissi e costi variabili:
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                            <div className="font-mono text-2xl text-center text-gray-900">
                                CT = CF + CV
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                Costo Totale = Costi Fissi + Costi Variabili
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formula del BEP */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-4">
                            <Target className="w-4 h-4" />
                            Formula fondamentale
                        </div>
                        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">Come si calcola il BEP?</h2>
                    </div>

                    <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-100">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Formula del Break Even Point (in quantità)</h3>

                        <div className="bg-white rounded-2xl p-8 border border-emerald-200 mb-8">
                            <div className="font-mono text-3xl text-center text-gray-900 mb-4">
                                BEP = CF / (P - CVu)
                            </div>
                            <div className="text-center text-gray-600 space-y-2">
                                <p><strong>CF</strong> = Costi Fissi totali</p>
                                <p><strong>P</strong> = Prezzo di vendita unitario</p>
                                <p><strong>CVu</strong> = Costo Variabile unitario</p>
                                <p className="pt-4 border-t border-gray-200 mt-4">
                                    <strong>(P - CVu)</strong> = Margine di Contribuzione Unitario
                                </p>
                            </div>
                        </div>

                        {/* Esempio pratico */}
                        <div className="bg-white rounded-2xl p-8 border border-emerald-200">
                            <h4 className="text-xl font-semibold text-gray-900 mb-6">Esempio pratico:</h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-emerald-50 rounded-xl p-6">
                                    <h5 className="font-semibold text-gray-900 mb-3">Dati dell'impresa:</h5>
                                    <ul className="space-y-2 text-gray-700">
                                        <li><strong>Costi Fissi (CF):</strong> 10.000€/mese</li>
                                        <li><strong>Prezzo vendita (P):</strong> 50€/unità</li>
                                        <li><strong>Costo variabile unitario (CVu):</strong> 30€/unità</li>
                                    </ul>
                                </div>

                                <div className="bg-teal-50 rounded-xl p-6">
                                    <h5 className="font-semibold text-gray-900 mb-3">Calcolo:</h5>
                                    <div className="space-y-3 text-gray-700">
                                        <p>Margine di contribuzione = 50€ - 30€ = <strong>20€</strong></p>
                                        <p>BEP = 10.000€ / 20€ = <strong>500 unità</strong></p>
                                        <div className="mt-4 p-4 bg-white rounded-lg border border-emerald-300">
                                            <p className="text-sm">
                                                <strong>Risultato:</strong> L'impresa deve vendere <strong className="text-emerald-600">500 unità </strong>
                                                al mese per coprire tutti i costi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Verifica */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <h5 className="font-semibold text-gray-900 mb-3">Verifica:</h5>
                                <div className="space-y-2 text-gray-700">
                                    <p>Ricavi totali = 500 unità × 50€ = <strong>25.000€</strong></p>
                                    <p>Costi variabili totali = 500 unità × 30€ = <strong>15.000€</strong></p>
                                    <p>Costi fissi = <strong>10.000€</strong></p>
                                    <p>Costi totali = 15.000€ + 10.000€ = <strong>25.000€</strong></p>
                                    <div className="mt-4 p-4 bg-emerald-100 rounded-lg border border-emerald-300">
                                        <p className="font-semibold text-emerald-900">
                                            Profitto = 25.000€ - 25.000€ = 0€ ✓
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BEP in valore */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-8 text-center">BEP in valore monetario</h2>
                    <p className="text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                        Oltre al BEP in quantità, possiamo calcolare il <strong>fatturato minimo</strong> necessario per pareggiare:
                    </p>

                    <div className="bg-white rounded-3xl p-10 shadow-sm">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Formula del BEP in valore:</h3>
                            <div className="font-mono text-3xl text-center text-gray-900 mb-4">
                                BEP€ = BEP (quantità) × P
                            </div>
                            <p className="text-center text-gray-600">oppure</p>
                            <div className="font-mono text-2xl text-center text-gray-900 mt-4">
                                BEP€ = CF / (1 - CVu/P)
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                            <h4 className="font-semibold text-gray-900 mb-4">Usando l'esempio precedente:</h4>
                            <p className="text-gray-700 mb-2">BEP in quantità = 500 unità</p>
                            <p className="text-gray-700 mb-2">Prezzo unitario = 50€</p>
                            <div className="mt-4 p-6 bg-white rounded-xl border border-blue-200">
                                <p className="text-lg text-gray-900">
                                    BEP in valore = 500 × 50€ = <strong className="text-blue-600 text-2xl">25.000€</strong>
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    L'impresa deve fatturare almeno 25.000€ al mese per pareggiare.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interpretazione del BEP */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Cosa significa il BEP?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Sotto il BEP */}
                        <div className="bg-red-50 rounded-3xl p-8 border border-red-200">
                            <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
                                <AlertTriangle className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-red-900 mb-4">Vendite &lt; BEP</h3>
                            <p className="text-red-700 mb-4 font-semibold">PERDITA</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Se vendi meno del BEP, i ricavi non coprono i costi. L'impresa è in perdita e
                                deve attingere alle riserve o indebitarsi.
                            </p>
                        </div>

                        {/* Al BEP */}
                        <div className="bg-yellow-50 rounded-3xl p-8 border border-yellow-200">
                            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Vendite = BEP</h3>
                            <p className="text-yellow-700 mb-4 font-semibold">PAREGGIO</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Vendendo esattamente il BEP, ricavi e costi si equivalgono.
                                Il profitto è zero: non guadagni, ma nemmeno perdi.
                            </p>
                        </div>

                        {/* Sopra il BEP */}
                        <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
                            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                                <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-green-900 mb-4">Vendite &gt; BEP</h3>
                            <p className="text-green-700 mb-4 font-semibold">PROFITTO</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Se vendi più del BEP, i ricavi superano i costi.
                                L'impresa genera profitto e può reinvestire o distribuire utili.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Margine di sicurezza */}
            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight mb-8">Margine di Sicurezza</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-10">
                        Il <strong>margine di sicurezza</strong> indica di quanto le vendite effettive superano il BEP.
                        Maggiore è il margine, minore è il rischio di andare in perdita.
                    </p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="font-mono text-2xl text-center mb-6">
                            Margine di Sicurezza = Vendite Effettive - BEP
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <p className="text-gray-300 mb-4">
                                <strong>Esempio:</strong> Se il BEP è 500 unità e vendi 700 unità:
                            </p>
                            <p className="text-white text-lg">
                                Margine di Sicurezza = 700 - 500 = <strong className="text-emerald-400">200 unità</strong>
                            </p>
                            <p className="text-gray-400 text-sm mt-4">
                                Puoi permetterti un calo delle vendite fino a 200 unità prima di andare in perdita.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
