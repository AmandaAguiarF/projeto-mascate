import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PedidoSolicitado } from './pedidoSolicitado';
import { Produto } from './produto';

@Entity()
export class ItensPedido {
  @PrimaryGeneratedColumn()
  item_id: number;

  @ManyToOne(() => PedidoSolicitado)
  @JoinColumn({ name: 'pedidoSolic_id' })
  pedidoSolicitado: PedidoSolicitado;

  @ManyToOne(() => Produto)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @Column()
  quantidade: number;

  @Column('text')
  observacao: string;

  constructor(item_id: number, pedidoSolicitado: PedidoSolicitado, produto: Produto, quantidade: number, observacao: string) {
    this.item_id = item_id;
    this.pedidoSolicitado = pedidoSolicitado;
    this.produto = produto;
    this.quantidade = quantidade;
    this.observacao = observacao;
  }
}
