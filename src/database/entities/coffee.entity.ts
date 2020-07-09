import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TastingNote } from './tasting-note.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  roaster: string;

  @Column()
  roast: string;

  @ManyToMany(type => TastingNote, { cascade: true })
  @JoinTable()
  tastingNotes: TastingNote[];
}
