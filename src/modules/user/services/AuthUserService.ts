import { compare } from "bcryptjs"
import prismaClient from "../../../prisma"
import { sign } from 'jsonwebtoken'

interface AuthRequest {
  email: string
  password: string
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    //verificar se existe o email
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      }
    })

    if (!user) {
      throw new Error('User/password incorrect')
    }

    //verificar se existe pass e user estão corretos
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('User/password incorrect')
    }

    // gerar um token JWT e devolver od dados do usuario
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      `${process.env.JWT_SECRET}`,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    }
  }
}

export { AuthUserService }