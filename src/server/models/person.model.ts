  import {Table, Column, Model} from 'sequelize-typescript';

  @Table
  export class Person extends Model<Person> {
    @Column
    name: string;
  
    @Column
    age: number;
  }