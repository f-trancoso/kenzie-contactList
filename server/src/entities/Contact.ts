import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn} from "typeorm";
import { User } from "./User";

@Entity('contacts')
export class Contact {
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

    @ManyToOne(() => User, user => user.contacts)
    @JoinColumn({name: 'user_id' })
    user: User
}