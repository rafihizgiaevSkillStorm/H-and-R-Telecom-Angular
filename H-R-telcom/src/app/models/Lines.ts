import { Device } from "./Device";



export class Lines{
    lineId?: number;// the id is generated from the database so we wont always have it?
    phoneNumber?: number;
    userPlanId:number;
    device:Device; // may the line has a device



    constructor(userPlanId:number, device:Device, phoneNumber?:number, line_Id?:number){
        this.lineId = line_Id;
        this.phoneNumber = phoneNumber;
        this.userPlanId = userPlanId;
        this.device=device;
    }
    
}