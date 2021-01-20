import {Router, Request, Response} from 'express';
import Mysql from '../mysql/mysql';

// crea una nueva instancia del router
const router = Router();

router.get('/heroes', (req: Request, resp: Response)=>{
    
    const query = `SELECT * FROM heroes`;
    
    Mysql.ejecutarQuery(query, (err: any, heroes: object[])=>{

        if(err){
            return resp.status(400).json({
                status: 400,
                mensaje: err,
            });
        } 

        return resp.json({
            status: 200,
            heroes
        })

    });
});

router.get('/heroes/:id', (req: Request, resp: Response)=>{

    const id = req.params.id;
    //const escapedID = Mysql.instance.conexion.escape{id};


    const query = `SELECT * FROM heroes WHERE id=${id}`;
    
    Mysql.ejecutarQuery(query, (err: any, heroe: object[])=>{

        if(err){
            return resp.status(400).json({
                status: 400,
                mensaje: err,
            });
        } 

        return resp.json({
            status: 200,
            heroe: heroe[0]
        })

    });
});

export default router;