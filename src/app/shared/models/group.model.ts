import { UserModel } from "./user.model";

export class group{
    groupId:number;
    GroupName:string;
    GroupDesc:string;
    CreatedDate:string;
    listInterUsers:UserModel;
    constructor()
    {  }
}