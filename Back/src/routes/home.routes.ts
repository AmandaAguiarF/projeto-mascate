import { Router, Request, Response } from "express";
// import { welcome } from "../controllers/home.controller";

class HomeRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", (req: Request, res: Response) => { return res.status(200).json("Olá, seu Sistema de Gerenciamento de Pedidos está funcionando!") });
  }
}

export default new HomeRoutes().router;