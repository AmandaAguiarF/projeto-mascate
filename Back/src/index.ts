import "reflect-metadata";
import { Unidade } from "./models/unidade";
import { Funcionario } from "./models/funcionario";
import { PedidoSolicitado } from "./models/pedidoSolicitado";
import { createConnections, getConnection } from "typeorm";


async function main() {
    try {
        const connection = await createConnections(); 
        console.log('Conexão com o banco de dados estabelecida.');

        // Obtém o repositório
        const pedidoSolicitadoRepository = getConnection().getRepository(PedidoSolicitado);

        const pedidos = await pedidoSolicitadoRepository.find();
        console.log('Pedidos solicitados encontrados:', pedidos);

    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}