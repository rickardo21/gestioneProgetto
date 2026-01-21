import Footer from "@/components/layout/footer";
import { Scale, Landmark, FileText, Users, Building2, ShoppingBag, Home, Coins } from "lucide-react";

export default function Imposte() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                <div className="z-10 px-4 space-y-6 max-w-5xl mx-auto mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold mb-4">
                        <Scale className="w-4 h-4" />
                        Fisco
                    </div>
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
                        Imposte e Tasse
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-500 font-medium tracking-tight max-w-3xl mx-auto leading-relaxed">
                        Il contributo dei cittadini allo Stato.
                        <span className="block mt-2 text-gray-900">Dirette e indirette.</span>
                    </p>
                </div>
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-slate-200 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Definizione */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-8">Cosa sono le imposte?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        Le <strong>imposte</strong> (o tributi) sono prelievi obbligatori di ricchezza che lo Stato effettua
                        sui cittadini e sulle imprese per finanziare la spesa pubblica: sanità, istruzione, infrastrutture,
                        sicurezza, welfare e servizi pubblici.
                    </p>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        Esistono diverse tipologie di imposte, ma la distinzione principale è tra <strong>imposte dirette</strong>
                        e <strong>imposte indirette</strong>.
                    </p>
                    <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 mt-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Landmark className="w-6 h-6 text-blue-600" />
                            <h3 className="text-xl font-semibold text-gray-900">Differenza tra imposte e tasse</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-6 border border-blue-200">
                                <h4 className="font-semibold text-gray-900 mb-2">Imposte</h4>
                                <p className="text-sm text-gray-600">
                                    Prelievi <strong>senza controprestazione diretta</strong>. Si pagano per finanziare servizi generali
                                    (es. IRPEF, IVA).
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-blue-200">
                                <h4 className="font-semibold text-gray-900 mb-2">Tasse</h4>
                                <p className="text-sm text-gray-600">
                                    Prelievi <strong>con controprestazione specifica</strong>. Si pagano per usufruire di un servizio
                                    (es. tassa sui rifiuti, tassa universitaria).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Imposte Dirette vs Indirette */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Imposte Dirette e Indirette</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Imposte Dirette */}
                        <div id="imposte-dirette" className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Imposte Dirette</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Colpiscono <strong>direttamente</strong> il reddito o il patrimonio di una persona o impresa.
                                Sono <strong>nominative</strong>: lo Stato sa chi le paga.
                            </p>

                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Caratteristiche:</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Colpiscono la <strong>capacità contributiva</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Sono <strong>progressive</strong> (chi guadagna di più paga di più)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Non possono essere <strong>trasferite</strong> ad altri</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <span>Più <strong>eque</strong> socialmente</span>
                                    </li>
                                </ul>
                            </div>

                            <h4 className="font-semibold text-gray-900 mb-3">Principali imposte dirette in Italia:</h4>
                            <div className="space-y-3">
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Users className="w-5 h-5 text-blue-600" />
                                        <h5 className="font-semibold text-gray-900">IRPEF</h5>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        <strong>Imposta sul Reddito delle Persone Fisiche.</strong> Si applica ai redditi
                                        di lavoratori dipendenti, autonomi, pensionati. È progressiva a scaglioni.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Building2 className="w-5 h-5 text-blue-600" />
                                        <h5 className="font-semibold text-gray-900">IRES</h5>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        <strong>Imposta sul Reddito delle Società.</strong> Si applica agli utili delle società
                                        di capitali (S.p.A., S.r.l.). Aliquota fissa al 24%.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Home className="w-5 h-5 text-blue-600" />
                                        <h5 className="font-semibold text-gray-900">IMU</h5>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        <strong>Imposta Municipale Unica.</strong> Tassa sulla proprietà immobiliare
                                        (case, terreni, fabbricati). Varia per comune.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Imposte Indirette */}
                        <div id="imposte-indirette" className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                                <ShoppingBag className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Imposte Indirette</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Colpiscono <strong>indirettamente</strong> la ricchezza, attraverso i consumi e i trasferimenti.
                                Non sono nominative: lo Stato non sa chi le paga.
                            </p>

                            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Caratteristiche:</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Colpiscono i <strong>consumi</strong> e i trasferimenti</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Sono <strong>proporzionali</strong> (stessa aliquota per tutti)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Possono essere <strong>trasferite</strong> (dal venditore al consumatore)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                        <span>Meno eque: colpiscono tutti allo stesso modo</span>
                                    </li>
                                </ul>
                            </div>

                            <h4 className="font-semibold text-gray-900 mb-3">Principali imposte indirette in Italia:</h4>
                            <div className="space-y-3">
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <ShoppingBag className="w-5 h-5 text-orange-600" />
                                        <h5 className="font-semibold text-gray-900">IVA</h5>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">
                                        <strong>Imposta sul Valore Aggiunto.</strong> Si applica su tutti i beni e servizi venduti.
                                        È la principale imposta indiretta.
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        <span className="px-3 py-1 bg-orange-100 rounded-full text-xs font-medium text-orange-800">4% (beni essenziali)</span>
                                        <span className="px-3 py-1 bg-orange-100 rounded-full text-xs font-medium text-orange-800">10% (aliquota ridotta)</span>
                                        <span className="px-3 py-1 bg-orange-100 rounded-full text-xs font-medium text-orange-800">22% (aliquota ordinaria)</span>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Coins className="w-5 h-5 text-orange-600" />
                                        <h5 className="font-semibold text-gray-900">Accise</h5>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        <strong>Imposte su prodotti specifici.</strong> Benzina, alcol, tabacco, energia elettrica.
                                        Sono fisse per unità di prodotto.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FileText className="w-5 h-5 text-orange-600" />
                                        <h5 className="font-semibold text-gray-900">Imposta di registro</h5>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        <strong>Su atti e contratti.</strong> Compravendite immobiliari, contratti di locazione,
                                        atti notarili.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Confronto tabellare */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Confronto diretto</h2>
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Caratteristica</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Imposte Dirette</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-orange-900">Imposte Indirette</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Cosa colpiscono</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Reddito e patrimonio</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Consumi e trasferimenti</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Nominatività</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Nominative (si sa chi paga)</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Anonime (non si sa chi paga)</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Progressività</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Progressive (chi guadagna di più paga di più)</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Proporzionali (aliquota fissa)</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Trasferibilità</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Non trasferibili</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Trasferibili (dal venditore al consumatore)</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Equità</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Più eque</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Meno eque (colpiscono tutti uguale)</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Esempi</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">IRPEF, IRES, IMU</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">IVA, Accise, Imposta di registro</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Principi del sistema fiscale */}
            <section className="py-20 px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Principi costituzionali del sistema fiscale</h2>
                    <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        La Costituzione italiana stabilisce alcuni principi fondamentali per il sistema tributario:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Capacità contributiva (Art. 53)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                "Tutti sono tenuti a concorrere alle spese pubbliche in ragione della loro <strong>capacità contributiva</strong>."
                                Chi ha di più deve contribuire di più.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Progressività</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Il sistema tributario deve essere <strong>progressivo</strong>: le aliquote aumentano
                                all'aumentare del reddito, per ridurre le disuguaglianze.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Universalità</h3>
                            <p className="text-gray-600 leading-relaxed">
                                <strong>Tutti</strong> devono pagare le imposte, senza eccezioni o privilegi.
                                Nessuno può sottrarsi al dovere fiscale.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Legalità</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Le imposte possono essere istituite solo con <strong>legge</strong>.
                                Nessun tributo può essere imposto senza approvazione parlamentare.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evasione fiscale */}
            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold tracking-tight mb-8">Evasione ed elusione fiscale</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-10">
                        Due fenomeni che danneggiano lo Stato e la collettività:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-semibold mb-4">Evasione fiscale</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Violazione <strong>illegale</strong> delle norme fiscali. Chi evade nasconde redditi o patrimoni
                                per non pagare le imposte dovute.
                            </p>
                            <p className="text-sm text-red-300">
                                <strong>Esempi:</strong> Lavoro in nero, fatture false, redditi non dichiarati.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-semibold mb-4">Elusione fiscale</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Sfruttamento <strong>legale</strong> di scappatoie normative per ridurre il carico fiscale.
                                Tecnicamente lecita, ma moralmente discutibile.
                            </p>
                            <p className="text-sm text-yellow-300">
                                <strong>Esempi:</strong> Paradisi fiscali, holding estere, operazioni artificiose.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
