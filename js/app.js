let mapaPrincipal, mapaZonas;

function irPantalla(id) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
    
    if(id === 'mapa' && !mapaPrincipal) cargarMapaPrincipal();
    if(id === 'zonas' && !mapaZonas) cargarMapaZonas();
}

function activarAlerta() {
    alert("🚨 ALERTA ACTIVADA: Se envió tu ubicación a contactos y autoridades.");
}

function cargarMapaPrincipal() {
    mapaPrincipal = L.map('contenedor-mapa').setView([-3.2583, -79.9659], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapaPrincipal);
    L.marker([-3.2583, -79.9659]).addTo(mapaPrincipal).bindPopup("Tu ubicación actual");
}

function cargarMapaZonas() {
    mapaZonas = L.map('mapa-zonas').setView([-3.2583, -79.9659], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapaZonas);
    L.circle([-3.2620, -79.9700], {color: '#DC2626', fillOpacity:0.4, radius:500}).addTo(mapaZonas).bindPopup("Alto riesgo");
    L.circle([-3.2540, -79.9580], {color: '#F59E0B', fillOpacity:0.4, radius:400}).addTo(mapaZonas).bindPopup("Medio riesgo");
}
