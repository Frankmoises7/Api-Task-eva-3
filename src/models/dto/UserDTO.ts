export interface BaseUserDTO {
  email: string
}

export interface UserDTO extends BaseUserDTO {
  id: number
}

export interface CreateUserDTO extends BaseUserDTO {
  firstName: string
  lastName: string
  password: string
}

export type UpdateUserDTO = Partial<CreateUserDTO>

export interface LoginUserDTO extends UserDTO {
  password: string
}

export interface UserTokenPayload {
  sub:number
  email: string
  iat: number
  exp: number
}