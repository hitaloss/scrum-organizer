import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { uuid } from "uuidv4";

@Entity("task")
export class Ingredients {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 100 })
  description: string;

  @Column({ length: 100 })
  status: string;

  @Column({ length: 100 })
  priority: string;

  @Column({ length: 100 })
  responsible: string;

  @Column({ length: 100 })
  creationDate: string;

  @Column({ length: 100 })
  updatedDate: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
