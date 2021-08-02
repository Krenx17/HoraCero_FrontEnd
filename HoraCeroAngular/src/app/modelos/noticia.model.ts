export class News{
    constructor(
        public _id: String,
        public creador: String,
        public name: String,
        public fecha: Date,
        public genero: String,
        public titulo: String,
        public texto: String,
        public imagen: String
    ){}
}