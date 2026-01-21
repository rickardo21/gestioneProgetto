const Footer = () => {
    return (
        <footer className = "py-12 px-6 border-t border-gray-200 bg-white" >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-medium">
                <p>© 2026 EcoBase. Tutti i diritti riservati.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Termini di Servizio</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Supporto</a>
                </div>
            </div>
        </footer >
    )
}

export default Footer
