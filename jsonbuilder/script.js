document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    const mapManager = new MapManager('map');
    mapManager.initialize();
    
    // DOM elements
    const markersList = document.getElementById('markersList');
    const artistsList = document.getElementById('artistsList');
    const markerForm = document.getElementById('markerForm');
    const artistForm = document.getElementById('artistForm');
    const searchInput = document.getElementById('searchMarkers');
    const saveNotification = document.getElementById('saveNotification');
    
    // Buttons
    const saveJsonBtn = document.getElementById('saveJson');
    const loadJsonBtn = document.getElementById('loadJson');
    const jsonFileInput = document.getElementById('jsonFileInput');
    const newMarkerBtn = document.getElementById('newMarker');
    const saveMarkerBtn = document.getElementById('saveMarker');
    const deleteMarkerBtn = document.getElementById('deleteMarker');
    const addArtistBtn = document.getElementById('addArtist');
    const saveArtistBtn = document.getElementById('saveArtist');
    const cancelArtistEditBtn = document.getElementById('cancelArtistEdit');
    const deleteArtistBtn = document.getElementById('deleteArtist');
    const clearAllBtn = document.getElementById('clearAll');
    
    // Form fields for marker
    const markerIdInput = document.getElementById('markerId');
    const markerLatInput = document.getElementById('markerLat');
    const markerLngInput = document.getElementById('markerLng');
    
    // Form fields for artist
    const artistIdInput = document.getElementById('artistId');
    const artistNameInput = document.getElementById('artistName');
    const welshDescriptionInput = document.getElementById('welshDescription');
    const englishDescriptionInput = document.getElementById('englishDescription');
    const contactInfoInput = document.getElementById('contactInfo');
    const venueLocationInput = document.getElementById('venueLocation');
    const welshLocationInstructionsInput = document.getElementById('welshLocationInstructions');
    const englishLocationInstructionsInput = document.getElementById('englishLocationInstructions');
    const noticeEnabledInput = document.getElementById('noticeEnabled');
    const noticeWelshMessageInput = document.getElementById('noticeWelshMessage');
    const noticeEnglishMessageInput = document.getElementById('noticeEnglishMessage');
    const noticeFields = document.getElementById('noticeFields');
    
    // Toggle notice fields visibility
    noticeEnabledInput.addEventListener('change', () => {
        noticeFields.classList.toggle('hidden', !noticeEnabledInput.checked);
    });

    // Auto-save timer
    let autoSaveTimer = null;
    const AUTO_SAVE_INTERVAL = 30000; // 30 seconds
    
    // Add utility functions to convert between formats
    function htmlBrToNewlines(text) {
        if (!text) return '';
        return text.replace(/<br\s*\/?>/gi, '\n');
    }

    function newlinesToHtmlBr(text) {
        if (!text) return '';
        return text.replace(/\n/g, '<br>');
    }
    
    // Set up event handlers
    dataManager.onChange = refreshUI;
    dataManager.onSave = (success) => {
        if (success) {
            saveNotification.textContent = 'Data saved successfully';
            saveNotification.classList.remove('error');
        } else {
            saveNotification.textContent = 'Error saving data';
            saveNotification.classList.add('error');
        }
        
        // Show notification
        saveNotification.classList.add('show');
        
        // Hide after 2 seconds
        setTimeout(() => {
            saveNotification.classList.remove('show');
        }, 2000);
    };
    
    mapManager.onMarkerClick = (markerId) => {
        selectMarker(markerId);
    };
    
    mapManager.onLocationUpdate = (lat, lng) => {
        if (dataManager.currentMarker) {
            markerLatInput.value = lat;
            markerLngInput.value = lng;
        }
    };
    
    // Load/Save JSON
    loadJsonBtn.addEventListener('click', () => {
        jsonFileInput.click();
    });
    
    jsonFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const json = e.target.result;
                if (dataManager.loadFromJSON(json)) {
                    refreshUI();
                    dataManager.saveToLocalStorage(); // Save the loaded JSON to localStorage
                }
            };
            reader.readAsText(file);
        }
    });
    
    saveJsonBtn.addEventListener('click', () => {
        const json = dataManager.generateJSON();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'markers.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // Save to localStorage as well
        dataManager.saveToLocalStorage();
    });
    
    // Add new marker
    newMarkerBtn.addEventListener('click', () => {
        const newMarker = dataManager.createNewMarker();
        selectMarker(newMarker.id);
    });
    
    // Add new artist
    addArtistBtn.addEventListener('click', () => {
        if (!dataManager.currentMarker) return;
        
        const newArtist = dataManager.createNewArtist();
        if (newArtist) {
            selectArtist(newArtist.id);
        }
    });
    
    // Save marker
    saveMarkerBtn.addEventListener('click', () => {
        const markerId = markerIdInput.value;
        
        // Check if the ID is unique
        if (!dataManager.isMarkerIdUnique(markerId)) {
            alert(`A marker with ID "${markerId}" already exists. Please use a unique ID.`);
            return;
        }
        
        const markerData = {
            id: markerId,
            latitude: parseFloat(markerLatInput.value),
            longitude: parseFloat(markerLngInput.value),
        };
        
        if (dataManager.currentMarker) {
            markerData.artist = dataManager.currentMarker.artist;
        } else {
            markerData.artist = [];
        }
        
        dataManager.updateMarker(markerData);
        refreshUI();
    });
    
    // Delete marker
    deleteMarkerBtn.addEventListener('click', () => {
        if (!dataManager.currentMarker) return;
        
        if (confirm(`Are you sure you want to delete marker #${dataManager.currentMarker.id}?`)) {
            dataManager.deleteMarker(dataManager.currentMarker.id);
            refreshUI();
        }
    });
    
    // Save artist
    saveArtistBtn.addEventListener('click', () => {
        if (!dataManager.currentMarker) return;
        
        const artistData = {
            id: artistIdInput.value,
            name: artistNameInput.value,
            notice: {
                enabled: noticeEnabledInput.checked,
                welshMessage: noticeWelshMessageInput.value,
                englishMessage: noticeEnglishMessageInput.value
            },
            welshDescription: newlinesToHtmlBr(welshDescriptionInput.value),
            englishDescription: newlinesToHtmlBr(englishDescriptionInput.value),
            contactInfo: newlinesToHtmlBr(contactInfoInput.value),
            venueLocation: venueLocationInput.value,
            welshLocationInstructions: newlinesToHtmlBr(welshLocationInstructionsInput.value),
            englishLocationInstructions: newlinesToHtmlBr(englishLocationInstructionsInput.value)
        };
        
        dataManager.updateArtist(artistData);
        showMarkerForm();
    });
    
    // Cancel artist edit
    cancelArtistEditBtn.addEventListener('click', () => {
        showMarkerForm();
    });
    
    // Delete artist
    deleteArtistBtn.addEventListener('click', () => {
        if (!dataManager.currentMarker || !dataManager.currentArtist) return;
        
        if (confirm(`Are you sure you want to delete artist ${dataManager.currentArtist.name}?`)) {
            dataManager.deleteArtist(dataManager.currentMarker.id, dataManager.currentArtist.id);
            showMarkerForm();
        }
    });
    
    // Clear All button event listener
    clearAllBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all markers? This action cannot be undone.')) {
            dataManager.clearAll();
            refreshUI();
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        refreshMarkersList(searchTerm);
    });
    
    // Function to refresh the UI
    function refreshUI() {
        refreshMarkersList();
        mapManager.updateMarkers(dataManager.getAllMarkers());
        
        if (dataManager.currentMarker) {
            mapManager.focusMarker(dataManager.currentMarker.id);
            showMarkerForm();
        } else {
            hideAllForms();
        }
    }
    
    // Function to refresh the markers list
    function refreshMarkersList(searchTerm = '') {
        markersList.innerHTML = '';
        
        dataManager.getAllMarkers().forEach((marker, index) => {
            // Filter by search term if provided
            const markerText = `${marker.id}: ${marker.artist.map(a => a.name).join(', ')}`;
            if (searchTerm && !markerText.toLowerCase().includes(searchTerm)) {
                return;
            }
            
            const markerItem = document.createElement('div');
            markerItem.className = 'marker-item';
            markerItem.setAttribute('data-marker-id', marker.id);
            markerItem.setAttribute('data-index', index);
            markerItem.draggable = true;
            
            if (dataManager.currentMarker && dataManager.currentMarker.id === marker.id) {
                markerItem.classList.add('active');
            }
            
            // Add drag handle
            const dragHandle = document.createElement('span');
            dragHandle.className = 'marker-item-drag-handle';
            dragHandle.innerHTML = '&#8942;&#8942;'; // Add "grip" icon
            markerItem.appendChild(dragHandle);
            
            const textSpan = document.createElement('span');
            textSpan.className = 'marker-item-content';
            textSpan.textContent = markerText;
            markerItem.appendChild(textSpan);
            
            markerItem.addEventListener('click', () => {
                selectMarker(marker.id);
            });
            
            // Drag and drop events
            markerItem.addEventListener('dragstart', handleDragStart);
            markerItem.addEventListener('dragover', handleDragOver);
            markerItem.addEventListener('dragenter', handleDragEnter);
            markerItem.addEventListener('dragleave', handleDragLeave);
            markerItem.addEventListener('drop', handleDrop);
            markerItem.addEventListener('dragend', handleDragEnd);
            
            markersList.appendChild(markerItem);
        });
    }
    
    // Drag and drop variables
    let draggedItem = null;
    let draggedItemIndex = -1;
    
    // Drag and drop handlers
    function handleDragStart(e) {
        draggedItem = this;
        draggedItemIndex = parseInt(this.getAttribute('data-index'));
        
        this.classList.add('dragging');
        
        // Set data for the drag operation
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.getAttribute('data-marker-id'));
        
        // Delay adding the opacity
        setTimeout(() => {
            this.style.opacity = '0.5';
        }, 0);
    }
    
    function handleDragOver(e) {
        e.preventDefault(); // Allow the drop
        e.dataTransfer.dropEffect = 'move';
        return false;
    }
    
    function handleDragEnter(e) {
        this.classList.add('drag-over');
    }
    
    function handleDragLeave(e) {
        this.classList.remove('drag-over');
    }
    
    function handleDrop(e) {
        e.stopPropagation(); // Stop it from redirecting
        
        // Don't do anything if we're dropping onto ourselves
        if (draggedItem !== this) {
            const newIndex = parseInt(this.getAttribute('data-index'));
            
            // Reorder the markers in the data manager
            dataManager.reorderMarkers(draggedItemIndex, newIndex);
            
            // Refresh the UI to show the new order
            refreshUI();
        }
        
        return false;
    }
    
    function handleDragEnd(e) {
        this.classList.remove('dragging');
        this.style.opacity = '1';
        
        // Clear all drag-over classes
        const items = document.querySelectorAll('.marker-item');
        items.forEach(item => {
            item.classList.remove('drag-over');
        });
        
        // Reset drag variables
        draggedItem = null;
        draggedItemIndex = -1;
    }
    
    // Function to refresh the artists list
    function refreshArtistsList() {
        artistsList.innerHTML = '';
        
        if (!dataManager.currentMarker) return;
        
        dataManager.currentMarker.artist.forEach(artist => {
            const artistItem = document.createElement('div');
            artistItem.className = 'artist-item';
            artistItem.textContent = `${artist.id}: ${artist.name}`;
            
            artistItem.addEventListener('click', () => {
                selectArtist(artist.id);
            });
            
            artistsList.appendChild(artistItem);
        });
    }
    
    // Function to select a marker
    function selectMarker(markerId) {
        dataManager.selectMarker(markerId);
        if (dataManager.currentMarker) {
            markerIdInput.value = dataManager.currentMarker.id;
            markerLatInput.value = dataManager.currentMarker.latitude;
            markerLngInput.value = dataManager.currentMarker.longitude;
            
            refreshArtistsList();
            showMarkerForm();
            mapManager.focusMarker(markerId);
            refreshMarkersList();
        }
    }
    
    // Function to select an artist
    function selectArtist(artistId) {
        dataManager.selectArtist(artistId);
        if (dataManager.currentArtist) {
            artistIdInput.value = dataManager.currentArtist.id;
            artistNameInput.value = dataManager.currentArtist.name;

            // Load notice data
            const notice = dataManager.currentArtist.notice || {};
            noticeEnabledInput.checked = !!notice.enabled;
            noticeWelshMessageInput.value = notice.welshMessage || '';
            noticeEnglishMessageInput.value = notice.englishMessage || '';
            noticeFields.classList.toggle('hidden', !notice.enabled);

            welshDescriptionInput.value = htmlBrToNewlines(dataManager.currentArtist.welshDescription);
            englishDescriptionInput.value = htmlBrToNewlines(dataManager.currentArtist.englishDescription);
            contactInfoInput.value = htmlBrToNewlines(dataManager.currentArtist.contactInfo);
            venueLocationInput.value = dataManager.currentArtist.venueLocation;
            welshLocationInstructionsInput.value = htmlBrToNewlines(dataManager.currentArtist.welshLocationInstructions);
            englishLocationInstructionsInput.value = htmlBrToNewlines(dataManager.currentArtist.englishLocationInstructions || "");
            
            showArtistForm();
        }
    }
    
    // UI helpers
    function showMarkerForm() {
        markerForm.classList.remove('hidden');
        artistForm.classList.add('hidden');
        refreshArtistsList();
    }
    
    function showArtistForm() {
        markerForm.classList.add('hidden');
        artistForm.classList.remove('hidden');
    }
    
    function hideAllForms() {
        markerForm.classList.add('hidden');
        artistForm.classList.add('hidden');
    }
    
    // Setup auto-save functionality
    function startAutoSave() {
        // Clear any existing timer
        if (autoSaveTimer) {
            clearInterval(autoSaveTimer);
        }
        
        // Set new timer
        autoSaveTimer = setInterval(() => {
            dataManager.saveToLocalStorage();
        }, AUTO_SAVE_INTERVAL);
    }
    
    // Handle page unload
    window.addEventListener('beforeunload', () => {
        dataManager.saveToLocalStorage();
    });
    
    // Modified initialization logic to start with empty set by default
    if (dataManager.loadFromLocalStorage()) {
        console.log('Loaded markers from localStorage');
        refreshUI();
        startAutoSave();
    } else {
        // Start with an empty set instead of loading markers.json
        console.log('Starting with a new empty set');
        refreshUI();
        startAutoSave();
    }
});
