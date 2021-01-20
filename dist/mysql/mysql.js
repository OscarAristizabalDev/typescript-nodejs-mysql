"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Mysql {
    constructor() {
        this.conectado = false;
        console.log('Clase inicializada');
        // Se inicializa la clase
        this.conexion = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'node_db'
        });
        this.conectarDB();
    }
    static get instance() {
        // Si ya hay una instacia retorna o en caso tal tal se returna la instancia definia dentro de la clase como atributo
        return this._instace || (this._instace = new this());
    }
    /**
     * Funcion para ejecutar el Query
     * @param query
     * @param callback
     */
    static ejecutarQuery(query, callback) {
        // el query va a retornar un error o los resultados
        this.instance.conexion.query(query, (err, results, fields) => {
            // Si hay un error
            if (err) {
                console.log('Error en Query: ' + err);
                return callback(err);
            }
            // Si no hay resultados
            if (results.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
    }
    /**
     * Funcion para realizar la conexion con la BD
     */
    conectarDB() {
        // Se realiza la conexión y recibe un callback por si se presenta un error
        this.conexion.connect((err) => {
            // En caso de presentanse un error de conexión
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos en linea');
        });
    }
}
exports.default = Mysql;
