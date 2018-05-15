import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table
export class Person extends Model<Person> {

    constructor(name?: any, age?: any) {
        super(name, age);
        console.log(name);
      }

    @Column
  name: string;
 
  @Column
  age: number;
 
}