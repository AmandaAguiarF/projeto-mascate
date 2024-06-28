import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Unidade } from './unidade';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @ManyToOne(() => Unidade)
  @JoinColumn({ name: 'unidade_id' })
  unidade: Unidade;

  constructor(funcionario_id: number, nome: string, email: string, unidade: Unidade) {
    this.id = funcionario_id;
    this.nome = nome;
    this.email = email;
    this.unidade = unidade;
  }
}
