import Footer from "@/components/layout/footer";

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

                        {/* <button className="text-[#0071e3] hover:text-[#0077ed] hover:underline px-6 py-3.5 rounded-full text-base font-medium transition-colors flex items-center gap-1">
                            Scopri di più <ChevronRight className="w-4 h-4" />
                        </button> */}
                    </div>
                </div>


                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white opacity-80 pointer-events-none" />
            </section>


            <Footer />
        </div>
    );
}
