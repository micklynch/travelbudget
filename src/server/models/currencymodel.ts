/* jshint indent: 2 */
import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table
export class Currency extends Model<Currency> {

  @Column
  country: string;

  @Column
  exchangerate: number;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;
}