import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { PedidoSolicitado } from './pedidoSolicitado';
import { Funcionario } from './funcionario';

@Entity()
export class PedidoEntregue {
  @PrimaryGeneratedColumn()
  pedidoEntregue_id: number;

  @ManyToOne(() => PedidoSolicitado)
  @JoinColumn({ name: 'pedidoSolic_id' })
  pedidoSolicitado: PedidoSolicitado;

  @ManyToOne(() => Funcionario)
  @JoinColumn({ name: 'funcionario_id' })
  funcionario: Funcionario;

  @CreateDateColumn()
  data_hora_entrega: Date;

  constructor(pedidoEntregue_id: number, pedidoSolicitado: PedidoSolicitado, funcionario: Funcionario, data_hora_entrega: Date) {
    this.pedidoEntregue_id = pedidoEntregue_id;
    this.pedidoSolicitado = pedidoSolicitado;
    this.funcionario = funcionario;
    this.data_hora_entrega = data_hora_entrega;
  }
}
