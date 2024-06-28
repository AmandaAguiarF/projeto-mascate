import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Unidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  constructor(unidade_id: number, nome: string) {
    this.id = unidade_id;
    this.nome = nome;
  }
}
