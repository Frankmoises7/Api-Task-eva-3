import { UserDTO, UserTokenPayload } from '../models/dto/UserDTO';
export declare function generateToken(user: UserDTO): string;
export declare function verifyToken(token: string): UserTokenPayload;
