import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn} from "typeorm";
import { Contact } from "./Contact";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column()
    email: string

    @Column()
    phone: string

    @CreateDateColumn()
    created_at: Date

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]
}