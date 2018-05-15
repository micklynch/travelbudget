/* jshint indent: 2 */
import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table
export class Currency extends Model<Currency> {

  constructor(country?: any, exchangerate?: any) {
    super(country, exchangerate);
    console.log(country);
  }
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
