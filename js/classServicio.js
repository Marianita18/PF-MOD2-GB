export  default class Servicios {
    #id;
    #nombreServicio;
    #descripcion;
    #precioServicio;
    #tiempoServicio;
    #categoria;
    #imagen;
    #reseña;
    constructor(nombreServicio,descripcion,precioServicio,tiempoServicio,categoria,imagen,reseña){
        this.#id = crypto.randomUUID();
        this.#nombreServicio = nombreServicio;
        this.#descripcion = descripcion;
        this.#precioServicio = precioServicio;
        this.#tiempoServicio = tiempoServicio;
        this.#categoria = categoria;
        this.#imagen = imagen;
        this.#reseña = reseña;
    }

    //Getters y Setters

    get id() {
        return this.#id;
    }
    set id(value) {
        this.#id = value;
    }
    get nombreServicio() {
        return this.#nombreServicio;
    }
    set nombreServicio(value) {
        this.#nombreServicio = value;
    }
    get descripcion() {
        return this.#descripcion;
    }
    set descripcion(value) {
        this.#descripcion = value;
    }
    get precioServicio() {
        return this.#precioServicio;
    }
    set precioServicio(value) {
        this.#precioServicio = value;
    }
    get tiempoServicio() {
        return this.#tiempoServicio;
    }
    set tiempoServicio(value) {
        this.#tiempoServicio = value;
    }
    get categoria() {
        return this.#categoria;
    }
    set categoria(value) {
        this.#categoria = value;
    }
    get imagen() {
        return this.#imagen;
    }
    set imagen(value) {
        this.#imagen = value;
    }
    get reseña() {
        return this.#reseña;
    }
    set reseña(value) {
        this.#reseña = value;
    }
}

