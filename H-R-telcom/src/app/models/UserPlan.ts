import { Plan } from "./Plan";


export class UserPlan{
    
// remove userId because it already replaced on user class, replace planId with plan object
    id?:number;
    plan:Plan;
    nickname:string;

    constructor(plan:Plan,nickname:string){
        this.plan=plan;
        this.nickname=nickname;

    }




}