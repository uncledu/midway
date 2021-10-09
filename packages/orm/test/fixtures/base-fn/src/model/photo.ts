import { EntityModel } from '../../../../../src';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

@EntityModel('test_photo')
export class Photo {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "url" })
  url: string;

}