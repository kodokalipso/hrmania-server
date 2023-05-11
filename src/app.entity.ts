import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AppEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public name: string;
}
