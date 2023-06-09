import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

class AuthController {
    async authenticate(req: Request, res: Response){
        const {email, password} = req.body
        const user = await userRepository.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({status: 'failure', message: 'email ou senha incorretos'});
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({status: 'failure', message: 'email ou senha incorretos'});
        }

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

        return res.json({
            user_id: user.id, 
            token,
        })
    }
}

export default new AuthController()