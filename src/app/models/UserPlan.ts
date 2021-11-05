import { DataService } from "../data.service";
import { Lines } from "./Lines";
import { Plan } from "./Plan";
import { User } from "./User";


export class UserPlan{
    
// remove userId because it already replaced on user class, replace planId with plan object
    id?:number;
    plan:Plan;
    nickname?:string;
    user?:User;
    lines?:Lines[] = [];

    constructor(plan:Plan,user:User, lines?:Lines[]){
        this.plan=plan;
        this.user=user;
        this.lines = lines;
    }




}