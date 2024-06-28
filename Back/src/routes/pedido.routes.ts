import { Router } from 'express';
import PedidoController from '../controllers/pedido.controller';


class PedidoRoutes {
    router = Router();
    controller = new PedidoController();


intializeRoutes() {
        // Criar um novo pedido.
        this.router.post("/pedido", this.controller.create);
        this.router.get("/pedido",  this.controller.findAll);
        this.router.get("/pedido/:id", this.controller.findOne);
        this.router.put("/pedido/:id", this.controller.update);
        this.router.delete("/pedido/:id", this.controller.delete);
    }
}

// pedidoRouter.post('/', controller.create);
// pedidoRouter.get('/', controller.findAll);
// pedidoRouter.get('/:id', controller.findOne);
// pedidoRouter.put('/:id', controller.update);
// pedidoRouter.delete('/:id', controller.delete);

// }

export default new PedidoRoutes().router; 






