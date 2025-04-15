class MapManager {
    constructor(mapElementId) {
        this.map = null;
        this.markers = {};
        this.mapElementId = mapElementId;
        this.onMarkerClick = null;
        this.onLocationUpdate = null;
    }

    initialize() {
        this.map = L.map(this.mapElementId).setView([53.24, -4.30], 10);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        // Allow clicking on the map to set new marker location
        this.map.on('click', (e) => {
            if (this.onLocationUpdate) {
                this.onLocationUpdate(e.latlng.lat, e.latlng.lng);
            }
        });
    }

    clearMarkers() {
        for (const id in this.markers) {
            this.markers[id].remove();
        }
        this.markers = {};
    }

    updateMarkers(markersData) {
        this.clearMarkers();
        
        markersData.forEach(markerData => {
            const position = [markerData.latitude, markerData.longitude];
            
            // Create the popup content with artist names and IDs
            const artistContent = markerData.artist.map(artist => 
                `<strong>${artist.id}</strong>: ${artist.name}`
            ).join('<br>');
            
            const popupContent = `
                <strong>ID: ${markerData.id}</strong><br>
                ${artistContent}
            `;
            
            // Create marker and add to map
            const marker = L.marker(position)
                .addTo(this.map)
                .bindPopup(popupContent);
            
            // Set click handler
            marker.on('click', () => {
                if (this.onMarkerClick) {
                    this.onMarkerClick(markerData.id);
                }
            });
            
            this.markers[markerData.id] = marker;
        });
    }

    focusMarker(id) {
        const marker = this.markers[id];
        if (marker) {
            this.map.setView(marker.getLatLng(), 14);
            marker.openPopup();
        }
    }

    updateMarkerPosition(id, lat, lng) {
        const marker = this.markers[id];
        if (marker) {
            marker.setLatLng([lat, lng]);
        }
    }
}
