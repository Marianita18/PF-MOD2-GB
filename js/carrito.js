document.addEventListener("DOMContentLoaded", () => {
  const cart = {};
  const cartTableBody = document.querySelector("#cart-table tbody");
  const cartTotalElement = document.getElementById("cart-total");

  const updateCartTotal = () => {
    let total = 0;
    for (let key in cart) {
      total += cart[key].price * cart[key].quantity;
    }
    cartTotalElement.textContent = total.toFixed(2);
  };

  const renderCart = () => {
    cartTableBody.innerHTML = "";
    for (let key in cart) {
      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${cart[key].name}</td>
              <td>$${cart[key].price.toFixed(2)}</td>
              <td>
                  <input type="number" class="form-control quantity-input" data-name="${key}" value="${
        cart[key].quantity
      }" min="1">
              </td>
              <td>$${(cart[key].price * cart[key].quantity).toFixed(2)}</td>
              <td>
                  <button class="btn btn-danger btn-sm btn-remove" data-name="${key}">Eliminar</button>
              </td>
          `;
      cartTableBody.appendChild(row);
    }
    updateCartTotal();
  };

  document.querySelectorAll(".btn-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = parseFloat(button.getAttribute("data-price"));

      if (cart[name]) {
        cart[name].quantity += 1;
      } else {
        cart[name] = { name, price, quantity: 1 };
      }
      renderCart();
      Swal.fire({
        icon: "success",
        title: "Producto agregado",
        text: `${name} ha sido agregado al carrito.`,
        timer: 1500,
        showConfirmButton: false,
      });
    });
  });

  cartTableBody.addEventListener("change", (e) => {
    if (e.target.classList.contains("quantity-input")) {
      const name = e.target.getAttribute("data-name");
      const quantity = parseInt(e.target.value);
      if (quantity <= 0) {
        delete cart[name];
      } else {
        cart[name].quantity = quantity;
      }
      renderCart();
    }
  });

  cartTableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-remove")) {
      const name = e.target.getAttribute("data-name");
      delete cart[name];
      renderCart();
      Swal.fire({
        icon: "info",
        title: "Producto eliminado",
        text: `${name} ha sido eliminado del carrito.`,
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });

  document.getElementById("checkout-btn").addEventListener("click", () => {
    if (Object.keys(cart).length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Carrito vacío",
        text: "Agrega productos al carrito antes de comprar.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Debe registrarse",
        text: "Por favor, regístrese para poder realizar la compra.",
        confirmButtonText: "Registrarse",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/pages/registro.html";
        }
      });
    }
  });
});





