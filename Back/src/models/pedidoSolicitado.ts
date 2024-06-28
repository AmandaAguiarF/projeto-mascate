import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Funcionario } from './funcionario';
import { Unidade } from './unidade';

@Entity()
export class PedidoSolicitado {
  @PrimaryGeneratedColumn()
  pedidoSolic_id: number;

  @ManyToOne(() => Funcionario)
  @JoinColumn({ name: 'funcionario_id' })
  funcionario: Funcionario;

  @ManyToOne(() => Unidade)
  @JoinColumn({ name: 'unidade_id' })
  unidade: Unidade;

  @Column('text')
  observacao: string;

  @Column()
  status: string;

  @CreateDateColumn()
  data_hora_solicitacao: Date;

  constructor(pedidoSolic_id: number, funcionario: Funcionario, unidade: Unidade, observacao: string, status: string, data_hora_solicitacao: Date) {
    this.pedidoSolic_id = pedidoSolic_id;
    this.funcionario = funcionario;
    this.unidade = unidade;
    this.observacao = observacao;
    this.status = status;
    this.data_hora_solicitacao = data_hora_solicitacao;
  }
}
