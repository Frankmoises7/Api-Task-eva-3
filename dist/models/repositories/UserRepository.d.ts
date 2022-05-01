import { CreateUserDTO, LoginUserDTO, UpdateUserDTO, UserDTO } from "../dto/UserDTO";
export default class UserRepository {
    readonly findAll: () => Promise<UserDTO[]>;
    readonly findById: (id: number) => Promise<UserDTO | undefined>;
    readonly findByEmail: (email: string) => Promise<LoginUserDTO | undefined>;
    readonly create: (user: CreateUserDTO) => Promise<UserDTO>;
    readonly update: (id: number, user: UpdateUserDTO) => Promise<void>;
    readonly delete: (id: number) => Promise<void>;
}
