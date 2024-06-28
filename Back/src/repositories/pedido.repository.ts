import { AppDataSource } from "../db/data-source";
import { PedidoSolicitado } from "../models/pedidoSolicitado";

const pedidoRepository = AppDataSource.getRepository(PedidoSolicitado);

export default {
    save: async (pedido: PedidoSolicitado) => {
        return await pedidoRepository.save(pedido);
    },

    retrieveAll: async () => {
        return await pedidoRepository.find();
    },

    retrieveById: async (id: number) => {
        return await pedidoRepository.findOneBy({ pedidoSolic_id: id });
    },

    update: async (pedido: PedidoSolicitado) => {
        return await pedidoRepository.update(pedido.pedidoSolic_id, pedido);
    },

    delete: async (id: number) => {
        return await pedidoRepository.delete(id);
    }
};
