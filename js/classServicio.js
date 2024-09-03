export  default class Servicios {
    #id;
    #nombreServicio;
    #descripcionServicio;
    #precioServicio;
    #tiempoServicio;
    #tipoServicio;
    #imagenServicio;
    #reseñaServicio;
    constructor(nombreServicio,descripcionServicio,precioServicio,tiempoServicio,tipoServicio,imagenServicio,reseñaServicio){
        this.#id = crypto.randomUUID();
        this.#nombreServicio = nombreServicio;
        this.#descripcionServicio = descripcionServicio;
        this.#precioServicio = precioServicio;
        this.#tiempoServicio = tiempoServicio;
        this.#tipoServicio = tipoServicio;
        this.#imagenServicio= imagenServicio;
        this.#reseñaServicio = reseñaServicio;
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
    get descripcionServicio() {
        return this.#descripcionServicio;
    }
    set descripcionServicio(value) {
        this.#descripcionServicio = value;
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
    get tipoServicio() {
        return this.#tipoServicio;
    }
    set tipoServicio(value) {
        this.#tipoServicio = value;
    }
    get imagenServicio() {
        return this.#imagenServicio;
    }
    set imagenServicio(value) {
        this.#imagenServicio = value;
    }
    get reseñaServicio() {
        return this.#reseñaServicio;
    }
    set reseñaServicio(value) {
        this.#reseñaServicio = value;
    }

    //metodo para que funcione json
    toJSON(){
        return{
            id: this.id,
            nombreServicio : this.nombreServicio,
            descripcionServicio : this.descripcionServicio,
            precioServicio : this.precioServicio,
            tiempoServicio : this.tiempoServicio,
            tipoServicio : this.tipoServicio,
            imagenServicio : this.imagenServicio,
            reseñaServicio : this.reseñaServicio
        }
    }
}



