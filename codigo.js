import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define1 from "https://api.observablehq.com/@matheus-finger/bicicletar-com-d3.js?v=4";

const runtime = new Runtime();

runtime.module(define1, name => {
    
    // --- BOTÕES DE FILTRO ---
    if (name === "viewof botoesFiltroSimples" || name === "viewof botoesPeriodo") {
        return new Inspector(document.querySelector("#botoes-filtro-container"));
    }
    
    // --- COLUNA DIREITA (TOPO) ---
    if (name === "viewof grafo_bipartido") {
        return new Inspector(document.querySelector("#grafo"));
    }
    // --- COLUNA DIREITA (TOPO) ---
    if (name === "viewof grafo_bipartido1") {
        return new Inspector(document.querySelector("#grafo1"));
    }
    
    // --- COLUNA DIREITA (MEIO) ---
    if (name === "mapa_regionais") {
        return new Inspector(document.querySelector("#mapa-regionais"));
    }
    // --- COLUNA DIREITA (MEIO) ---
    if (name === "mapa_regionais1") {
        return new Inspector(document.querySelector("#mapa-regionais1"));
    }
    
    // --- COLUNA DIREITA (EMBAIXO) ---
    if (name === "viewof heatmapFiltros") {
        return new Inspector(document.querySelector("#heatmap"));
    }
    
    // --- COLUNA DIREITA (EMBAIXO) ---
    if (name === "viewof heatmapFiltros1") {
        return new Inspector(document.querySelector("#heatmap1"));
    }
    
    // --- COLUNA ESQUERDA (TOPO) ---
    if (name === "viewof mapa_saldo_d3") {
        return new Inspector(document.querySelector("#map-area"));
    }

    // --- COLUNA ESQUERDA (TOPO) ---
    if (name === "viewof mapa_saldo_d3_1") {
        return new Inspector(document.querySelector("#map-area1"));
    }
    
    // --- COLUNA ESQUERDA (EMBAIXO) ---
    if (name === "viewof scatterMarginal") {
        return new Inspector(document.querySelector("#dashboard-area"));
    }
    
    // --- COLUNA ESQUERDA (EMBAIXO) ---
    if (name === "viewof scatterMarginal1") {
        return new Inspector(document.querySelector("#dashboard-area1"));
    }
    // --- COLUNA ESQUERDA (EMBAIXO) ---
    if (name === "viewof mapa") {
        return new Inspector(document.querySelector("#mapa1"));
    }
    
    return null;
});
