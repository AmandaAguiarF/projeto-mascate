import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { PedidoSolicitado } from './pedidoSolicitado';

@Entity()
export class HistoricoPedidos {
  @PrimaryGeneratedColumn()
  historicoPedido_id: number;

  @ManyToOne(() => PedidoSolicitado)
  @JoinColumn({ name: 'pedidoSolic_id' })
  pedidoSolicitado: PedidoSolicitado;

  @Column('text')
  observacao: string;

  @CreateDateColumn()
  data_hora_historico: Date;

  constructor(historicoPedido_id: number, pedidoSolicitado: PedidoSolicitado, observacao: string, data_hora_historico: Date) {
    this.historicoPedido_id = historicoPedido_id;
    this.pedidoSolicitado = pedidoSolicitado;
    this.observacao = observacao;
    this.data_hora_historico = data_hora_historico;
  }
}
