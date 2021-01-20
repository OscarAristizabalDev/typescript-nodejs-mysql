"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Se importa la clase server
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
// Se instacia el servidor por el puerto 3000
const server = server_1.default.init(3000);
// Se especifica al server app que rutas van a funcionar
server.app.use(router_1.default);
// Se inicializa la clase del servidor
// Mysql.instance;
// He iniclializados el servidor
server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
});
