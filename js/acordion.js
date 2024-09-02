function crearPasosASeguir() {
  const contenedorDePasosASeguir = document.querySelector(
    "#contenedorDePasosASeguir"
  );
  if (verMasPasosASeguir.innerText === "Ver más...") {
    pasosASeguir.innerHTML = `<ol class="steps-list">
                      <li>
                        <strong class="text-decoration-underline">Compra y Confirmación:</strong> Añade el pack al
                        carrito y realiza la compra. Recibirás un correo de
                        confirmación con los detalles de la compra y el inicio del
                        proceso.
                      </li>
                      <li>
                        <strong class="text-decoration-underline">Contacto Inicial:</strong> Después de la compra,
                        nos pondremos en contacto contigo para discutir tus
                        necesidades específicas y objetivos para el pack
                        adquirido.
                      </li>
                      <li>
                        <strong class="text-decoration-underline">Desarrollo del Contenido:</strong> Nuestro equipo
                        comenzará a crear los Reels y fotos basados en las
                        indicaciones proporcionadas, con revisiones intermedias
                        para asegurar tu satisfacción.
                      </li>
                      <li>
                        <strong class="text-decoration-underline">Entrega Final:</strong> Entregaremos el contenido
                        final en el formato acordado dentro del plazo establecido.
                      </li>
                      <li>
                        <strong class="text-decoration-underline">Soporte Post-Entrega:</strong> Ofrecemos soporte
                        adicional para asegurar que el contenido funcione
                        perfectamente en tus plataformas.
                      </li>
                    </ol>`;
    pasosASeguir.classList = "lead";

    contenedorDePasosASeguir.insertBefore(pasosASeguir, verMasPasosASeguir);

    verMasPasosASeguir.innerText = "Ver menos...";
  } else {
    contenedorDePasosASeguir.removeChild(contenedorDePasosASeguir.children[1]);
    verMasPasosASeguir.innerText = "Ver más...";
  }
}
const pasosASeguir = document.createElement("div");
const verMasPasosASeguir = document.querySelector("#verMasPasosASeguir");

verMasPasosASeguir.addEventListener("click", crearPasosASeguir);

