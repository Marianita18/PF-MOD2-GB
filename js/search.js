document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('suggestions');
  
    const suggestions = [
      'Pack Básico de Reels y Fotos',
      'Pack Avanzado de Reels y Fotos',
      'Pack Premium de Reels y Fotos',
      'Pack de Reels Temáticos',
      'Pack de Reels y Fotos Personalizados',
      'Pack de Videos Cortos para Historias',
      'Pack de Reels y Fotos de Testimonios',
      'Pack de Fotos y Videos de Productos',
      'Pack de Videos Educativos o Tutoriales',
      'Pack de Contenido Estacional'
    ];
  
    searchInput.addEventListener('input', function () {
      const query = searchInput.value.toLowerCase();
      suggestionsContainer.innerHTML = '';
  
      if (query) {
        const filteredSuggestions = suggestions.filter(suggestion =>
          suggestion.toLowerCase().includes(query)
        );
  
        filteredSuggestions.forEach(suggestion => {
          const suggestionItem = document.createElement('div');
          suggestionItem.classList.add('suggestion-item');
          suggestionItem.textContent = suggestion;
          suggestionItem.addEventListener('click', function () {
            searchInput.value = suggestion;
            suggestionsContainer.innerHTML = '';
          });
          suggestionsContainer.appendChild(suggestionItem);
        });
      }
    });
  });