import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Sabor } from './sabor';

@Entity()
export class Producao {
  @PrimaryGeneratedColumn()
  producao_id: number;

  @ManyToOne(() => Sabor)
  @JoinColumn({ name: 'sabor_id' })
  sabor: Sabor;

  @Column()
  quantidade: number;

  @Column('text')
  observacao: string;

  @CreateDateColumn()
  data_hora_producao: Date;

  constructor(producao_id: number, sabor: Sabor, quantidade: number, observacao: string, data_hora_producao: Date) {
    this.producao_id = producao_id;
    this.sabor = sabor;
    this.quantidade = quantidade;
    this.observacao = observacao;
    this.data_hora_producao = data_hora_producao;
  }
}
