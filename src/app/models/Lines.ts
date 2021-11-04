import { Device } from "./Device";



export class Lines{
    lineId?: number;// the id is generated from the database so we wont always have it?
    phonenumber? : number;
    userplan_Id?:number;
    device_Id?:number; // may the line has a device



    constructor(phonenumber?:number,userPlanId?:number, device_Id?:number, line_Id?:number){
        this.lineId = line_Id;
        this.phonenumber = phonenumber;
        this.userplan_Id = userPlanId;
        this.device_Id = device_Id;
    }
    
}