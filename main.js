const dataAtual = new Date ();
let dataObjetivo = prompt("Data final ANO-MES-DIA Exemplo: 2024-04-10");

dataObjetivo = new Date (dataObjetivo + "T23:59");
let diasQueFaltam = Math.floor ((dataObjetivo - dataAtual) / 86400000);

document.querySelector("#dias_restantes").textContent = diasQueFaltam;