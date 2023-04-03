import { Request, Response } from "express";
import { contactRepository } from "../repositories/ContactRepository";
import { userRepository } from "../repositories/UserRepository";

export class UserController {
    async create(req: Request, res: Response){

        const {name, email, phone} = req.body

        try {
            const newUser = userRepository.create({name, email, phone})

            await userRepository.save(newUser)

            return res.status(201).json(newUser)
        } catch (error) {
            return res.status(500).json({message: 'Internal server error'})
        }
    }

    async createContact(req: Request, res: Response) {
		const { name, email, phone } = req.body
		const { idUser } = req.params

		try {
			const user = await userRepository.findOneBy({ id: Number(idUser) })

			if (!user) {
				return res.status(404).json({ message: 'Usuário não existe' })
			}

			const newContact = contactRepository.create({
				name,
                email,
                phone,
				user,
			})

			await contactRepository.save(newContact)

			return res.status(201).json(newContact)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

    async list(req: Request, res: Response) {
		try {
			const users = await userRepository.find({
				relations: {
					contacts: true
				},
			})

			return res.json(users)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

    async listContacts(req: Request, res: Response) {

        const {idUser} = req.params 

		try {
			const contacts = await contactRepository.find({
                select: {
                    name: true,
                    email: true,
                    phone: true,
                    id: true,
                },
                where:{
                    user:{
                        id: Number(idUser)
                    }
                },
            })

			return res.json(contacts)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

}