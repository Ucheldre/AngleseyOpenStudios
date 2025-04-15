class DataManager {
    constructor() {
        this.markers = [];
        this.currentMarker = null;
        this.currentArtist = null;
        this.onChange = null;
        this.onSave = null; // Callback for save events
        this.LOCAL_STORAGE_KEY = 'anglesey_markers_data';
    }

    loadFromJSON(jsonString) {
        try {
            // Handle JSONC by removing comments
            const cleanedJson = jsonString.replace(/\/\/.*$/gm, '');
            this.markers = JSON.parse(cleanedJson);
            if (this.onChange) this.onChange();
            return true;
        } catch (error) {
            console.error('Error parsing JSON:', error);
            alert('Error loading JSON: ' + error.message);
            return false;
        }
    }

    generateJSON() {
        return JSON.stringify(this.markers, null, 2);
    }

    getAllMarkers() {
        return this.markers;
    }

    getMarkerById(id) {
        return this.markers.find(marker => marker.id === id);
    }

    selectMarker(id) {
        this.currentMarker = this.getMarkerById(id);
        this.currentArtist = null;
        return this.currentMarker;
    }

    selectArtist(artistId) {
        if (!this.currentMarker) return null;
        
        this.currentArtist = this.currentMarker.artist.find(artist => artist.id === artistId);
        return this.currentArtist;
    }

    updateMarker(markerData) {
        if (!this.isMarkerIdUnique(markerData.id)) {
            alert('Error: Marker ID must be unique.');
            return null;
        }

        const index = this.markers.findIndex(marker => marker.id === markerData.id);
        
        if (index !== -1) {
            // Update existing marker
            this.markers[index] = {
                ...this.markers[index],
                ...markerData
            };
        } else {
            // Add new marker
            this.markers.push(markerData);
        }
        
        this.currentMarker = markerData;
        if (this.onChange) this.onChange();
        
        // After updating, save to localStorage
        this.saveToLocalStorage();
        return markerData;
    }

    updateArtist(artistData) {
        if (!this.currentMarker) return null;
        
        const artistIndex = this.currentMarker.artist.findIndex(artist => artist.id === artistData.id);
        
        if (artistIndex !== -1) {
            // Update existing artist
            this.currentMarker.artist[artistIndex] = {
                ...this.currentMarker.artist[artistIndex],
                ...artistData
            };
        } else {
            // Add new artist
            this.currentMarker.artist.push(artistData);
        }
        
        this.currentArtist = artistData;
        if (this.onChange) this.onChange();
        
        // After updating, save to localStorage
        this.saveToLocalStorage();
        return artistData;
    }

    createNewMarker() {
        // Generate a unique ID
        const ids = this.markers.map(marker => parseInt(marker.id));
        const newId = (Math.max(...ids, 0) + 1).toString();
        
        const newMarker = {
            id: newId,
            latitude: 53.22,  // Default to a location in Anglesey
            longitude: -4.16,
            artist: []
        };
        
        this.markers.push(newMarker);
        this.currentMarker = newMarker;
        this.currentArtist = null;
        
        if (this.onChange) this.onChange();
        
        // After creating, save to localStorage
        this.saveToLocalStorage();
        return newMarker;
    }

    createNewArtist() {
        if (!this.currentMarker) return null;
        
        // Generate a unique ID
        const ids = this.currentMarker.artist.map(artist => parseInt(artist.id));
        const allIds = this.markers.flatMap(marker => marker.artist.map(artist => parseInt(artist.id)));
        const newId = (Math.max(...allIds, 0) + 1).toString();
        
        const newArtist = {
            id: newId,
            name: "New Artist",
            welshDescription: "",
            englishDescription: "",
            contactInfo: "",
            venueLocation: "",
            welshLocationInstructions: "",
            englishLocationInstructions: ""
        };
        
        this.currentMarker.artist.push(newArtist);
        this.currentArtist = newArtist;
        
        if (this.onChange) this.onChange();
        
        // After creating, save to localStorage
        this.saveToLocalStorage();
        return newArtist;
    }

    deleteMarker(id) {
        const index = this.markers.findIndex(marker => marker.id === id);
        if (index !== -1) {
            this.markers.splice(index, 1);
            this.currentMarker = null;
            this.currentArtist = null;
            if (this.onChange) this.onChange();
            
            // After deleting, save to localStorage
            this.saveToLocalStorage();
            return true;
        }
        return false;
    }

    deleteArtist(markerId, artistId) {
        const markerIndex = this.markers.findIndex(marker => marker.id === markerId);
        if (markerIndex === -1) return false;
        
        const marker = this.markers[markerIndex];
        const artistIndex = marker.artist.findIndex(artist => artist.id === artistId);
        
        if (artistIndex !== -1) {
            marker.artist.splice(artistIndex, 1);
            if (this.currentArtist && this.currentArtist.id === artistId) {
                this.currentArtist = null;
            }
            if (this.onChange) this.onChange();
            
            // After deleting, save to localStorage
            this.saveToLocalStorage();
            return true;
        }
        
        return false;
    }

    isMarkerIdUnique(id) {
        // If we're editing the current marker, its ID is allowed
        if (this.currentMarker && this.currentMarker.id === id) {
            return true;
        }
        
        // Check if any other marker has this ID
        return !this.markers.some(marker => marker.id === id);
    }

    reorderMarkers(oldIndex, newIndex) {
        if (oldIndex < 0 || oldIndex >= this.markers.length || 
            newIndex < 0 || newIndex >= this.markers.length) {
            return false;
        }
        
        // Remove the item from the old position
        const marker = this.markers.splice(oldIndex, 1)[0];
        
        // Insert it at the new position
        this.markers.splice(newIndex, 0, marker);
        
        if (this.onChange) this.onChange();
        
        // After reordering, save to localStorage
        this.saveToLocalStorage();
        return true;
    }

    // Save current state to localStorage
    saveToLocalStorage() {
        try {
            localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.markers));
            if (this.onSave) this.onSave(true); // Success
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            if (this.onSave) this.onSave(false); // Error
            return false;
        }
    }

    // Load state from localStorage
    loadFromLocalStorage() {
        try {
            const savedData = localStorage.getItem(this.LOCAL_STORAGE_KEY);
            if (savedData) {
                this.markers = JSON.parse(savedData);
                if (this.onChange) this.onChange();
                return true;
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
        }
        return false;
    }

    // Clear localStorage data
    clearLocalStorage() {
        localStorage.removeItem(this.LOCAL_STORAGE_KEY);
    }

    clearAll() {
        this.markers = [];
        this.currentMarker = null;
        this.currentArtist = null;
        this.clearLocalStorage();
        if (this.onChange) this.onChange();
        return true;
    }
}

const dataManager = new DataManager();
