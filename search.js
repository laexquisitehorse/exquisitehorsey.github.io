function performSearch() {
        var searchTerm = document.getElementById('search-input').value.trim();
        if (searchTerm !== '') {
            alert('Performing search for: ' + searchTerm);
        } else {
            alert('Please enter a search term.');
        }
    }

    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch();
    });
