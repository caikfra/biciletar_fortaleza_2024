import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";

// Link do seu notebook público
import define1 from "https://api.observablehq.com/@matheus-finger/bicicletar-com-d3.js?v=4"; 

const runtime = new Runtime();

runtime.module(define1, name => {
    
    // --- COLUNA DIREITA (TOPO) ---
    if (name === "viewof grafo_bipartido") {
            return new Inspector(document.querySelector("#grafo"))
    }

    // --- COLUNA DIREITA (MEIO) ---
    if (name === "mapa_regionais") {
            return new Inspector(document.querySelector("#mapa-regionais"))
    }

    // --- COLUNA DIREITA (EMBAIXO) ---
    if (name === "viewof heatmapFiltros") {
            return new Inspector(document.querySelector("#heatmap"))
    }

    // --- COLUNA ESQUERDA (TOPO) ---
    if (name === "viewof mapa_saldo_d3") {
            return new Inspector(document.querySelector("#map-area"))
    }

    // --- COLUNA ESQUERDA (EMBAIXO) ---
    if (name === "viewof scatterMarginal") {
        return new Inspector(document.querySelector("#dashboard-area"));
    }

    return null;
});