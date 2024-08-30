document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('review-form');
    const reviewerName = document.getElementById('reviewer-name');
    const reviewerComment = document.getElementById('reviewer-comment');
    const reviewsContainer = document.getElementById('reviewsContainer');
    
    const productId = '123';
    const userId = 'user@example.com'; 
  
   
    function loadReview() {
      const savedName = localStorage.getItem(`reviewerName-${productId}-${userId}`);
      const savedComment = localStorage.getItem(`reviewerComment-${productId}-${userId}`);
      
      if (savedName && savedComment) {
        reviewsContainer.innerHTML = `
          <div class="review-item">
            <h5>${savedName}</h5>
            <p>${savedComment}</p>
            <button class="btn btn-secondary btn-sm edit-review">Editar</button>
            <button class="btn btn-danger btn-sm delete-review">Eliminar</button>
          </div>
        `;
        form.style.display = 'none'; 
      }
    }
  
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      let name = reviewerName.value.trim();
      let comment = reviewerComment.value.trim();
      
      const existingComment = localStorage.getItem(`reviewerName-${productId}-${userId}`);
      if (existingComment) {
        Swal.fire({
          icon: 'info',
          title: 'Información',
          text: 'Ya has dejado un comentario para este producto.',
        });
        return;
      }
  
      if (name && comment) {
        localStorage.setItem(`reviewerName-${productId}-${userId}`, name);
        localStorage.setItem(`reviewerComment-${productId}-${userId}`, comment);
  
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
          <h5>${name}</h5>
          <p>${comment}</p>
          <button class="btn btn-secondary btn-sm edit-review">Editar</button>
          <button class="btn btn-danger btn-sm delete-review">Eliminar</button>
        `;
        
        reviewsContainer.appendChild(reviewItem);
        form.style.display = 'none';
        reviewerName.value = '';
        reviewerComment.value = '';
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Advertencia',
          text: 'Por favor, completa todos los campos.',
        });
      }
    });
  

    reviewsContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('edit-review')) {
        const reviewItem = event.target.closest('.review-item');
        reviewerName.value = reviewItem.querySelector('h5').textContent;
        reviewerComment.value = reviewItem.querySelector('p').textContent;
        form.style.display = 'block'; 
        reviewsContainer.removeChild(reviewItem); 
        localStorage.removeItem(`reviewerName-${productId}-${userId}`);
        localStorage.removeItem(`reviewerComment-${productId}-${userId}`);
      }
      if (event.target.classList.contains('delete-review')) {
        Swal.fire({
          title: '¿Estás seguro?',
          text: "¡No podrás recuperar este comentario!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, eliminarlo',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            const reviewItem = event.target.closest('.review-item');
            reviewsContainer.removeChild(reviewItem); 
            form.style.display = 'block'; 
            localStorage.removeItem(`reviewerName-${productId}-${userId}`);
            localStorage.removeItem(`reviewerComment-${productId}-${userId}`);
            Swal.fire(
              'Eliminado!',
              'Tu comentario ha sido eliminado.',
              'success'
            );
          }
        });
      }
    });
  
    loadReview();
  });