"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
// crea una nueva instancia del router
const router = express_1.Router();
router.get('/heroes', (req, resp) => {
    const query = `SELECT * FROM heroes`;
    mysql_1.default.ejecutarQuery(query, (err, heroes) => {
        if (err) {
            return resp.status(400).json({
                status: 400,
                mensaje: err,
            });
        }
        return resp.json({
            status: 200,
            heroes
        });
    });
});
router.get('/heroes/:id', (req, resp) => {
    const id = req.params.id;
    //const escapedID = Mysql.instance.conexion.escape{id};
    const query = `SELECT * FROM heroes WHERE id=${id}`;
    mysql_1.default.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            return resp.status(400).json({
                status: 400,
                mensaje: err,
            });
        }
        return resp.json({
            status: 200,
            heroe: heroe[0]
        });
    });
});
exports.default = router;
