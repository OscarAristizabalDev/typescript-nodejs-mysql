"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
// exportar clase para ser usada en otros archivos
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    // Metodo init para instanciar la clase server, siempre usando la misma instancia
    static init(port) {
        return new Server(port);
    }
    // Clase para iniciar el servidor
    start(callback) {
        // Se indica el puerto por el que va a escuchar el server y se envía una función callback
        this.app.listen(this.port, callback);
        // Se llama el metodo public folder para que la app utilice la carpeta publica
        this.publicFolder();
    }
    // 
    publicFolder() {
        // indica la direccion de la carpeta publica
        const publicPath = path.resolve(__dirname, '../public');
        // Se le indica a la app que utilice la carpeta publica
        this.app.use(express.static(publicPath));
    }
}
exports.default = Server;
