var Serie = /** @class */ (function () {
    function Serie(id, nombre, plataforma, temporadas, descripcion, link, imagen) {
        this.id = id;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.link = link;
        this.imagen = imagen;
    }
    return Serie;
}());

export { Serie };