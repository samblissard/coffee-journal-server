import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { FlavorDescriptor } from './flavor-descriptor.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  company: string;

  @ManyToMany(type => FlavorDescriptor, { cascade: true })
  @JoinTable()
  descriptors: FlavorDescriptor[];
}
