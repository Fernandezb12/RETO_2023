let map = L.map('map').setView([2.1960, -75.6274], 16);	

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">Daniel Fernandez</a> Garzón, Huila'
}).addTo(map);