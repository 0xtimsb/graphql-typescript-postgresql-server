import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column('text', { unique: true })
	email: string;

	@Field()
	@Column('text', { unique: true })
	username: string;

	@Column({ default: false })
	confirmed: boolean;

	@Column()
	password: string;
}