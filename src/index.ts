// Se importa la clase server
import Server from './server/server';
import router from './router/router';
import Mysql from './mysql/mysql';

// Se instacia el servidor por el puerto 3000
const server = Server.init(3000);
// Se especifica al server app que rutas van a funcionar
server.app.use(router);
// Se inicializa la clase del servidor
// Mysql.instance;
// He iniclializados el servidor
server.start(()=>{
    console.log('Servidor corriendo en el puerto 3000')
});