import "reflect-metadata";
import { Unidade } from "../models/unidade";
import { Funcionario } from "../models/funcionario";
import { Produto } from "../models/produto";
import { Sabor } from "../models/sabor";
import { PedidoSolicitado } from "../models/pedidoSolicitado";
import { ItensPedido } from "../models/itensPedido";
import { PedidoEntregue } from "../models/pedidoEntregue";
import { Producao } from "../models/producao";
import { HistoricoPedidos } from "../models/historicoPedido";
import { config, dialect } from "../config/db.config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: dialect,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    entities: [
        Unidade,
        Funcionario,
        Produto,
        Sabor,
        PedidoSolicitado,
        ItensPedido,
        PedidoEntregue,
        Producao,
        HistoricoPedidos
    ],
    synchronize: true,
    logging: false,
});
