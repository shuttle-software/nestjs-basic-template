import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}