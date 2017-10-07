export interface IJwtPayload {
    id: string;
    email: string;
    isAdmin?: boolean;
    jti?: string;
}