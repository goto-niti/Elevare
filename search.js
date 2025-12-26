console.log("search.js loaded");
document.addEventListener('DOMContentLoaded', () => {
// Search and filter functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const craftFilter = document.getElementById('craftFilter');
const locationFilter = document.getElementById('locationFilter');
const experienceFilter = document.getElementById('experienceFilter');
const priceFilter = document.getElementById('priceFilter');
const artisanCards = document.querySelectorAll('.artisan-card');

// Function to filter artisans
function filterArtisans() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCraft = craftFilter.value.toLowerCase();
    const selectedLocation = locationFilter.value.toLowerCase();
    
    let visibleCount = 0;
    
    artisanCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        const cardCraft = card.getAttribute('data-craft') || '';
        const cardLocation = card.getAttribute('data-location') || '';
        
        // Check if card matches all filters
        const matchesSearch = searchTerm === '' || cardText.includes(searchTerm);
        const matchesCraft = selectedCraft === '' || cardCraft.includes(selectedCraft);
        const matchesLocation = selectedLocation === '' || cardLocation.includes(selectedLocation);
        
        if (matchesSearch && matchesCraft && matchesLocation) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show message if no results
    const resultsSection = document.getElementById('searchResults');
    let noResultsMsg = document.getElementById('noResultsMsg');
    
    if (visibleCount === 0) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('p');
            noResultsMsg.id = 'noResultsMsg';
            noResultsMsg.style.textAlign = 'center';
            noResultsMsg.style.fontSize = '1.2rem';
            noResultsMsg.style.color = '#666';
            noResultsMsg.style.marginTop = '2rem';
            noResultsMsg.textContent = 'No artisans found matching your criteria. Try adjusting your filters.';
            resultsSection.appendChild(noResultsMsg);
        }
    } else {
        if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
}

// Event listeners for search and filters
if (searchBtn) {
    searchBtn.addEventListener('click', filterArtisans);
}

if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filterArtisans();
        }
    });
    
    // Real-time search as user types
    searchInput.addEventListener('input', filterArtisans);
}

if (craftFilter) {
    craftFilter.addEventListener('change', filterArtisans);
}

if (locationFilter) {
    locationFilter.addEventListener('change', filterArtisans);
}

if (experienceFilter) {
    experienceFilter.addEventListener('change', () => {
        // This is a placeholder for experience filtering
        // In a real application, you would filter based on artisan experience data
        console.log('Experience filter:', experienceFilter.value);
    });
}

if (priceFilter) {
    priceFilter.addEventListener('change', () => {
        // This is a placeholder for price filtering
        // In a real application, you would filter based on pricing data
        console.log('Price filter:', priceFilter.value);
    });
}

// Reset filters button functionality
function addResetButton() {
    const filtersDiv = document.querySelector('.filters');
    if (filtersDiv && !document.getElementById('resetBtn')) {
        const resetBtn = document.createElement('button');
        resetBtn.id = 'resetBtn';
        resetBtn.textContent = 'Reset Filters';
        resetBtn.className = 'search-btn';
        resetBtn.style.gridColumn = 'span 2';
        resetBtn.style.marginTop = '1rem';
        
        resetBtn.addEventListener('click', () => {
            searchInput.value = '';
            craftFilter.value = '';
            locationFilter.value = '';
            experienceFilter.value = '';
            priceFilter.value = '';
            filterArtisans();
        });
        
        filtersDiv.appendChild(resetBtn);
    }
}

// Initialize
if (document.querySelector('.search-section')) {
    addResetButton();

}
});

