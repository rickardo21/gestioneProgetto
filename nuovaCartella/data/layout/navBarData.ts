export const navData: Record<string, { title: string; items: string[] }[]> = {
    Macroeconomia: [
        { title: "Indicatori", items: ["Inflazione", "PIL (Prodotto Interno Lordo)"] },
        { title: "Mercato", items: ["Domanda & Offerta"] },
    ],
    Costi: [
        { title: "Gestione", items: ["BEP (Break Even Point)", "Costi & Spese"] },
    ],
    Fisco: [
        { title: "Tributi", items: ["Imposte e Tasse"] },
        { title: "Classificazione", items: ["Imposte Dirette", "Imposte Indirette"] },
    ],
    default: [
        { title: "Esplora", items: ["Tutti i temi"] },
        { title: "Work in Progress", items: ["Work in Progress"] },
    ]
};
export const navItems = [
    "Macroeconomia",
    "Costi",
    "Fisco",
    "Esplora"
];