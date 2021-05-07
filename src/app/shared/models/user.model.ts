export class UserModel{
    UserID: string;
    UserName:string;
    FirstName: string;
    LastName: string;
    Email:string;
    Role:string;
}

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token?: string;
}