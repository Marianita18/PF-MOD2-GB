
function crearTerminosYCondiciones() {
    const contenedorDeTerminosYCondiciones = document.querySelector(
      "#contenedorDeTerminosYCondiciones"
    );
    if (verMasTerminosYCondiciones.innerText === "Ver más...") {
      terminosYCondiciones.innerHTML = ` <p>
        <b>1. Introducción</b><br>
        Bienvenido a <b>Magneto</b>. Al usar nuestro sitio web <a href="../index.html">www.magneto.com.ar</a>, aceptas estos términos. Si no estás de acuerdo, por favor, no utilices nuestro sitio.<br><br>

        <b>2. Productos y Servicios</b><br>
        <b>2.1</b> Vendemos packs de fotos y reels para marketing digital. Estos productos son digitales y se entregan en formato descargable.<br>
        <b>2.2</b> Los productos están sujetos a una licencia no exclusiva para uso en proyectos de marketing digital. La propiedad intelectual permanece con <b>Magneto</b>.<br><br>

        <b>3. Compra y Pago</b><br>
        <b>3.1</b> Los precios están en el sitio web y pueden cambiar. El pago se realiza a través de los métodos indicados y la transacción se considera completa tras recibir la confirmación del pago.<br><br>

        <b>4. Entrega</b><br>
        <b>4.1</b> La entrega digital se realizará dentro de [número] días hábiles tras la confirmación del pago. No somos responsables de retrasos por problemas técnicos.<br><br>

        <b>5. Política de Devoluciones</b><br>
        <b>5.1</b> No se ofrecen reembolsos una vez que el producto ha sido descargado. Si hay problemas técnicos, contáctanos dentro de los [número] días posteriores a la compra.<br><br>

        <b>6. Uso</b><br>
        <b>6.1</b> Los productos adquiridos no deben ser revendidos ni utilizados para fines distintos a los especificados.<br><br>

        <b>7. Modificaciones</b><br>
        <b>7.1</b> Podemos modificar estos términos en cualquier momento. Los cambios se aplicarán inmediatamente tras su publicación en el sitio web.<br><br>

        <b>8. Ley Aplicable</b><br>
        Estos términos se rigen por las leyes de Argentina. Cualquier disputa será resuelta en los tribunales de Buenos Aires.<br><br>

        <b>9. Contacto</b><br>
        Para consultas, escríbenos a <a href="../pages/error404.html">info@magneto.com.ar</a> o a entra a nuestra sección de <a href="../pages/contacto.html">contacto</a>, Buenos Aires, Argentina.
    </p>`;
      terminosYCondiciones.classList = "lead";
  
      contenedorDeTerminosYCondiciones.insertBefore(terminosYCondiciones, verMasTerminosYCondiciones);
  
      verMasTerminosYCondiciones.innerText = "Ver menos...";
    } else {
      contenedorDeTerminosYCondiciones.removeChild(contenedorDeTerminosYCondiciones.children[1]);
      verMasTerminosYCondiciones.innerText = "Ver más...";
    }
  }
  const terminosYCondiciones = document.createElement("div");
  const verMasTerminosYCondiciones = document.querySelector("#verMasTerminosYCondiciones");
  
  verMasTerminosYCondiciones.addEventListener("click", crearTerminosYCondiciones);
  