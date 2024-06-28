import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  produto_id: number;

  @Column()
  nome: string;

  @Column()
  tipo: string;

  @Column('text')
  descricao: string;

  @Column()
  img: string;

  constructor(produto_id: number, nome: string, tipo: string, descricao: string, img: string) {
    this.produto_id = produto_id;
    this.nome = nome;
    this.tipo = tipo;
    this.descricao = descricao;
    this.img = img;
  }
}
