import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, BeforeInsert, BeforeUpdate} from "typeorm";
import { Contact } from "./Contact";
import  { hashSync, getRounds } from 'bcryptjs'

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

    @Column()
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 8)
        }      
    }

    @CreateDateColumn()
    created_at: Date

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]
}