import { PrismaClient } from "@prisma/client"
import { CreateUserDTO, LoginUserDTO, UpdateUserDTO, UserDTO } from "../dto/UserDTO"

const prisma = new PrismaClient()

export default class UserRepository {

  // Encontrar a todos los Usuarios
  public readonly findAll = async(): Promise<UserDTO[]> => { 
    const users = await prisma.user.findMany()
    const userWhitoutPassword = users.map(user => {
      const { password, ...userWhitoutPassword } = user
      return userWhitoutPassword
    })
    return userWhitoutPassword
  }

  // Encontrar a los usuarios por su ID
  public readonly findById = async (id: number): Promise<UserDTO | undefined> => {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })
    if (!user) return

    const { password, ...userWitoutPassword } = user
    return userWitoutPassword
  }

  // Encontrar a los usuarios por su Email
  public readonly findByEmail = async (email: string): Promise<LoginUserDTO | undefined> => {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) return

    return user
  }

  //Crear Usuarios
  public readonly create = async (user: CreateUserDTO): Promise<UserDTO> => {
    const newUser = await prisma.user.create({
      data: user
    })
    const { password, ...userWhitoutPassword } = newUser
    return userWhitoutPassword
  }

  //Actualizar Usuarios
  public readonly update = async (id: number, user: UpdateUserDTO): Promise<void> => {
    await prisma.user.update({
      where: {
        id
      },
      data: user
    })
  }

  //Eliminar Usuarios
  public readonly delete = async (id: number): Promise<void> => {
    await prisma.user.delete({
      where: {
        id
      }
    })
  }
}