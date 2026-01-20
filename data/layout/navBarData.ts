export const navData: Record<string, { title: string; items: string[] }[]> = {
    Macroeconomia: [
        { title: "Indicatori", items: ["Inflazione", "PIL (Prodotto Interno Lordo)"] },
    ],
    Analisi: [
        { title: "Gestione", items: ["Costi & Spese"] },
        { title: "BEP", items: ["BEP (Break Even Point)"] },
    ],
    Fiscalità: [
        { title: "Tributi", items: ["Imposte e Tasse"] },
        { title: "Classificazione", items: ["Imposte Dirette", "Imposte Indirette"] },
    ],
    Mercato: [
        { title: "Mercato", items: ["Domanda & Offerta"] },
    ],
    default: [
        { title: "Esplora", items: ["Tutti i temi"] },
        // { title: "Work in Progress", items: ["Work in Progress"] },
    ]
};
export const navItems = [
    "Macroeconomia",
    "Analisi",
    "Mercato",
    "Fiscalità",
    "Esplora"
];