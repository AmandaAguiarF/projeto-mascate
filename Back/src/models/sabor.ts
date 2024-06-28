import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Produto } from './produto';

@Entity()
export class Sabor {
  @PrimaryGeneratedColumn()
  sabor_id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Produto)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  constructor(sabor_id: number, nome: string, produto: Produto) {
    this.sabor_id = sabor_id;
    this.nome = nome;
    this.produto = produto;
  }
}
