// src/routes/router.ts
import { Application } from "express";
import homeRoutes from "./home.routes";
import pedidoRoutes from "./pedido.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/home", homeRoutes);
    app.use("/pedido", pedidoRoutes); // Adiciona a rota de pedidos
  }
}
