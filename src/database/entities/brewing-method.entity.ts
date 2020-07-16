import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class BrewingMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  constructor(description: string) {
    this.description = description;
  }
}
