import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FlavorDescriptor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
