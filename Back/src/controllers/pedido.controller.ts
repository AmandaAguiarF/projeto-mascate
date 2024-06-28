// src/controllers/pedidoController.ts

import { Request, Response } from 'express';
import pedidoRepository from '../repositories/pedido.repository';
import { PedidoSolicitado } from '../models/pedidoSolicitado';

export default class PedidoController {
  async create(req: Request, res: Response) {
    if (!req.body.funcionario || !req.body.itens) {
      return res.status(400).send({
        message: "O pedido deve conter funcionário e itens"
      });
    }

    try {
      const pedido: PedidoSolicitado = req.body;
      const savedPedido = await pedidoRepository.save(pedido);
      res.status(201).send(savedPedido);
    } catch (err) {
      res.status(500).send({
        message: "Erro ao tentar criar um pedido"
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const pedidos = await pedidoRepository.retrieveAll();
      res.status(200).send(pedidos);
    } catch (err) {
      res.status(500).send({
        message: "Erro ao buscar todos os pedidos"
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const pedido = await pedidoRepository.retrieveById(id);
      if (pedido) {
        res.status(200).send(pedido);
      } else {
        res.status(404).send({
          message: `Pedido com ID: ${id} não encontrado`
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Erro ao buscar o pedido com ID: ${id}`
      });
    }
  }

  async update(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    let pedido: PedidoSolicitado = req.body;
    // pedidoSolic_id = id;

    try {
      const updatedPedido = await pedidoRepository.update(pedido);
      if (updatedPedido) {
        res.status(200).send(`Pedido com ID: ${id} atualizado`);
      } else {
        res.status(404).send({
          message: `Pedido com ID: ${id} não encontrado`
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Erro ao atualizar o pedido com ID: ${id}`
      });
    }
  }

  async delete(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const deleted = await pedidoRepository.delete(id);
      if (deleted) {
        res.status(200).send(`Pedido com ID: ${id} deletado`);
      } else {
        res.status(404).send({
          message: `Pedido com ID: ${id} não encontrado`
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Erro ao deletar o pedido com ID: ${id}`
      });
    }
  }
}

