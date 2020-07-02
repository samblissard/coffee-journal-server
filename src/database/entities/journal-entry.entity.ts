import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
  TableForeignKey,
} from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class JournalEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Coffee)
  coffee: Coffee;
}
