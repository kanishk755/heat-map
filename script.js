document.addEventListener("DOMContentLoaded", function () {
    const cityCenter = [22.7196, 75.8577];
    const map = L.map('map').setView(cityCenter, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map);
    const heatMapData = [
        [22.764351, 75.891151, 0.9],
        [22.8147, 75.9350, 0.5],
    ];

    heatMapData.forEach(data => {
        const [lat, lon, heatLevel] = data;
        const color = heatLevel >= 0.8 ? 'red' : heatLevel >= 0.4 ? 'yellow' : 'white';
        L.circleMarker([lat, lon], {
            radius: 5,
            fillColor: color,
            color: color,
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }).addTo(map);
    });
});
