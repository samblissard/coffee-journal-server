import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Coffee } from './coffee.entity';
import { BrewingMethod } from './brewing-method.entity';

@Entity()
export class JournalEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Coffee)
  coffee: Coffee;

  @ManyToOne(type => BrewingMethod, { cascade: true })
  brewingMethod: BrewingMethod;

  @Column()
  coffeeWeight: number;

  @Column()
  waterWeight: number;

  @Column()
  grindSetting: number;

  @Column({ default: 3 })
  rating: number;

  @Column({ default: '' })
  personalTastingNotes: string;
}
