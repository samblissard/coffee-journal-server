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

  @OneToOne(type => Coffee)
  coffee: Coffee;

  @OneToOne(type => BrewingMethod)
  brewingMethod: BrewingMethod;

  @Column()
  coffeeWeight: number;

  @Column()
  waterWeight: number;

  @Column()
  grindSetting: number;
}
