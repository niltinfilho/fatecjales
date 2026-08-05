class Dispositivo {
    constructor(marca) {
        this.marca = marca;
    };
};

class NotebookGamer extends Dispositivo {
    constructor(marca, placaVideo) {
        super(marca);
        this.placaVideo = placaVideo;
    };
};

let notebook = new NotebookGamer("lenovo", "abc");
console.log(notebook);