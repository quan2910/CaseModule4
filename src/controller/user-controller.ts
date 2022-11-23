import {Request, Response} from "express";
import bcrypt from 'bcrypt';
import {User} from "../model/user";
import jwt from "jsonwebtoken"


class UserController {
    register = async (req: Request, res: Response) => {
        let user = req.body;
        const userFind = await User.findOne({
            username: user.username
        })
        if (userFind) {
            res.status(200).json({
                mess: "Tai khoan da ton tai",
                checkRegister: false
            })
        } else {
            user.password = await bcrypt.hash(user.password, 10)
            await User.create(user)
            res.status(200).json({
                mess: "Thanh cong",
                checkRegister: true
            })
        }
    }


    login = async (req: Request, res: Response) => {
        let user = req.body;
        let userFind = await User.findOne({
            username: user.username
        });
        if (!userFind) {
            return res.status(200).json({
                massage: 'User is not exist!!'
            })
        } else {
            let comparePassword = await bcrypt.compare(user.password, userFind.password)
            if (!comparePassword) {
                return res.json({
                    massage: 'Password is wrong'
                })
            } else {
                let payload = {
                    idUser: userFind._id,
                    username: userFind.username
                }
                let secret = 'aloalo'
                let token = await jwt.sign(payload, secret, {
                    expiresIn: 36000
                });
                return res.json({
                    token: token,
                    idUser: userFind._id
                })
            }
        }
    }

}

export default new UserController();