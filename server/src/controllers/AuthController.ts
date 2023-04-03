import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

class AuthController {
    async authenticate(req: Request, res: Response){
        const {email, password} = req.body
        const user = await userRepository.findOne({ where: { email } });

        if (!user) {
            return res.sendStatus(401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.sendStatus(401);
        }

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

        return res.json({
            user: user.id, 
            token,
        })
    }
}

export default new AuthController()