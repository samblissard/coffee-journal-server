import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TastingNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  constructor(description: string) {
    this.description = description;
  }
}
