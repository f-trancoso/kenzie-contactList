import { Request, Response } from "express";
import { contactRepository } from "../repositories/ContactRepository";
import { userRepository } from "../repositories/UserRepository";
import { hashSync } from "bcryptjs";

export class UserController {
    async create(req: Request, res: Response){

        const {name, email, phone, password} = req.body

        try {
            const newUser = userRepository.create({name, email, phone, password})

            await userRepository.save(newUser)

            return res.status(201).json(newUser)
        } catch (error) {
			console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
    }

    async list(req: Request, res: Response) {
		try {
			const users = await userRepository.find({
				select:{
					id: true,
					name: true,
					email: true,
					phone: true,
				},
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

	async listById(req: Request, res: Response){
		const {userId} = req.params
		const user = await userRepository.find({
			select: {
				name: true,
				email: true,
				phone: true,
				id: true,
			},
			relations: {
				contacts: true
			},
			where:{
				id: Number(userId)
			},
		})

		if (!user){
			return res.status(404).json({status: 'failure', message: 'user not found'})
		}

		return res.status(200).json({status: 'success', user})
		
	}

	async update(req: Request, res: Response){
		const {userId} = req.params
		const user = await userRepository.findOneBy({id: Number(userId)})

		if (!user){
			return res.status(404).json({status: 'failure', message: 'user not found'})
		}

		try {
			
			const {contacts, ...content} = req.body

			if(content.password){
				content.password = hashSync(content.password, 8)
			}

			const updatedUser = await userRepository.update({id: Number(userId)}, {...content})

			return res.status(200).json({status: 'success', message: 'user was updated successfully', user: updatedUser})

		} catch (error) {
			console.error(error)
			return res.status(500).json({status: 'failure', message: 'user repository error'})
		}
	}

	async delete(req: Request, res: Response){

		const {userId} = req.params

		const user = await userRepository.findOneBy({id: Number(userId)})

		if (!user){
			return res.status(404).json({status: 'failure', message: 'user not found'})
		}

		try {
			await userRepository.delete(user.id)

			return res.status(204)
		} catch (error) {
			console.error(error)

			return res.status(500).json({status: 'failure', message: 'user repository error'})
		}
	}

}

export class ContactController{
	async create(req: Request, res: Response) {
		const { name, email, phone } = req.body
		const { userId } = req.params

		try {
			const user = await userRepository.findOneBy({ id: Number(userId) })

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

        const {userId} = req.params 

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
                        id: Number(userId)
                    }
                },
            })

			return res.json(contacts)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

	async listById(req: Request, res: Response){
		const {userId} = req.params
	}

	async update(req: Request, res: Response){
		const {contactId} = req.params
		const contact = await contactRepository.findOneBy({id: Number(contactId)})

		if (!contact){
			return res.status(404).json({status: 'failure', message: 'contact not found'})
		}

		try {

			const {user, ...rest} = req.body

			const updatedContact = await contactRepository.update({id: Number(contactId)}, rest)

			return res.status(200).json({status: 'success', message: 'user was updated successfully', user: updatedContact})

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

	async delete(req: Request, res: Response){

		const {contactId} = req.params

		const contact = await contactRepository.findOneBy({id: Number(contactId)})

		if (!contact){
			return res.status(404).json({status: 'failure', message: 'user not found'})
		}

		try {
			await contactRepository.delete(contact.id)

			return res.status(204)
		} catch (error) {
			console.error(error)

			return res.status(500).json({status: 'failure', message: 'user repository error'})
		}
	}
}